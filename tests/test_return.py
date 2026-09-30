"""Regressions for the rejected return, arm articulation and two-actor export."""
import copy
import gzip
import json
import shutil
import subprocess
import tempfile
import unittest
from pathlib import Path

from anima.tools import Engine, GUIDED_TOOLS
from anima.store import Store
from anima.exports import export
from anima.quality import release_report, rebuild_derived
from anima.constraints import joint_angles
from anima.math3d import euler_quat, qmul, qinv, rotate, sub, norm
from anima.body_clearance import clearance_report, segment_ellipsoid_bound, torso_envelope
from anima.surface_geometry import torso_triangles, capsule_surface_bound

ROOT=Path(__file__).parents[1]


class ReturnRegressionTests(unittest.TestCase):
    @classmethod
    def setUpClass(cls):
        cls.tmp=tempfile.TemporaryDirectory()
        cls.engine=Engine(Store(cls.tmp.name))
        cls.created=cls.engine.call('create_animation',{'recipe':'forehand_return'})
        cls.clip=cls.engine.store.get(cls.created['clip_id'],'clip')
        cls.serve=cls.engine.call('create_animation',{'recipe':'zverev_serve'})

    @classmethod
    def tearDownClass(cls):cls.tmp.cleanup()

    def test_real_rejected_return_pose_is_blocked_without_policy_metadata(self):
        bad=json.loads((ROOT/'tests/fixtures/rejected_return_pose.json').read_text())
        self.assertNotIn('quality_policy',bad)
        result=clearance_report(bad)
        self.assertFalse(result['checks']['arm_torso_clearance'])
        self.assertLess(result['metrics']['minimum_arm_torso_clearance_bound_m'],-.03)
        self.assertEqual(result['metrics']['arm_torso_worst_sample']['part'],'right_upper_arm')
        with self.assertRaisesRegex(ValueError,'arm_torso_clearance'):export(bad,'json')

    def test_builtin_return_checks_all_samples_and_interpolated_poses(self):
        r=self.clip['evaluation'];checks=r['checks']
        for key in ('arm_torso_clearance','arm_joint_limits','forward_knees',
                    'elbow_continuity','rigid_grip','ball_contact'):
            self.assertTrue(checks[key],key)
        self.assertGreater(r['metrics']['minimum_arm_torso_clearance_bound_m'],.001)
        self.assertLess(r['metrics']['maximum_chest_relative_elbow_speed_m_s'],8)
        self.assertIsNone(checks['joint_limits'])
        self.assertNotIn('frames',self.created)
        self.assertLess(len(json.dumps(self.created)),2600)
        self.assertEqual(len(GUIDED_TOOLS),5)
        choices=self.engine.call('list_motion_recipes',{'query':'return'})
        self.assertEqual(choices['recipes'][0]['id'],'forehand_return')

    def test_forearm_angle_above_90_does_not_trigger_euler_branch_error(self):
        joint=next(j for j in self.clip['rig']['joints'] if j['name']=='right_forearm')
        for degrees in (-105,95,105):
            self.assertAlmostEqual(joint_angles(joint,euler_quat([0,degrees,0]))[1],degrees)

    def test_overrotated_wrist_and_forearm_are_blocked_and_revision_repairs(self):
        bad=copy.deepcopy(self.clip);names={j['name']:i for i,j in enumerate(bad['rig']['joints'])}
        bad['frames'][500]['rotations'][names['right_forearm']]=euler_quat([0,120,0])
        bad['frames'][501]['rotations'][names['right_wrist']]=euler_quat([0,45,0])
        bad=rebuild_derived(bad)
        r=release_report(bad)
        self.assertFalse(r['checks']['arm_joint_limits'])
        with self.assertRaisesRegex(ValueError,'arm_joint_limits'):export(bad,'gltf')
        saved=self.engine.store.put('clip',bad)
        fixed=self.engine.call('revise_animation',{'clip_id':saved['id']})
        self.assertEqual(fixed['quality']['status'],'checks_passed')
        self.assertNotEqual(saved['id'],fixed['clip_id'])
        self.assertEqual(self.engine.store.get(saved['id'],'clip')['frames'][500]['rotations'],bad['frames'][500]['rotations'])

    def test_small_quaternion_jump_can_still_be_an_elbow_branch_failure(self):
        bad=copy.deepcopy(self.clip);i=next(i for i,j in enumerate(bad['rig']['joints']) if j['name']=='right_shoulder')
        bad['frames'][550]['rotations'][i]=qmul(bad['frames'][550]['rotations'][i],euler_quat([0,0,20]))
        bad=rebuild_derived(bad);r=release_report(bad)
        self.assertTrue(r['checks']['rotation_continuity'])
        self.assertFalse(r['checks']['elbow_continuity'])
        with self.assertRaisesRegex(ValueError,'elbow_continuity'):export(bad,'json')

    def test_valid_wrist_endpoints_can_violate_limits_during_playback(self):
        bad=copy.deepcopy(self.clip);bad['frames']=bad['frames'][500:502]
        bad['duration']=1/bad['fps'];bad.pop('ball_contact');bad.pop('impact_time')
        i=next(i for i,j in enumerate(bad['rig']['joints']) if j['name']=='right_wrist')
        for frame,angles,t in zip(bad['frames'],([70,0,35],[-70,0,-35]),(0,bad['duration'])):
            frame['time']=t;frame['rotations'][i]=euler_quat(angles)
        r=release_report(rebuild_derived(bad))
        self.assertFalse(r['checks']['arm_joint_limits'])
        self.assertTrue(all(v['time']==bad['duration']/2 for v in r['metrics']['arm_joint_limit_violations']))

    def test_height_heading_and_tempo_retarget_preserve_arm_safety(self):
        for spec in ({'height':1.6,'tempo':.75,'heading':130,'origin':[2,0,-1]},
                     {'height':2.2,'tempo':1.25,'heading':-60}):
            with self.subTest(spec=spec):
                result=self.engine.call('create_animation',dict(recipe='forehand_return',**spec))
                self.assertEqual(result['quality']['status'],'checks_passed')

    def test_court_export_has_two_actors_and_exact_shared_ball_contact(self):
        result=self.engine.call('finish_animation',{'clip_id':self.created['clip_id'],
            'serve_clip_id':self.serve['clip_id'],'formats':['json']})
        self.assertEqual(result['status'],'ready')
        scene=json.loads(Path(result['files'][0]['path']).read_text())
        self.assertEqual(len(scene['scene']['server']['frames']),len(scene['frames']))
        self.assertGreater(scene['frames'][0]['root'][2],24)
        f=scene['frames'][round(scene['impact_time']*scene['fps'])]
        hit=f['attachments']['racket'];local=rotate(qinv(hit['rotation']),sub(f['ball'],hit['points']['sweet_spot']))
        self.assertLess(norm(sub(local,[0,0,.0335])),1e-9)
        physics=scene['scene']['ball_physics']
        self.assertGreater(physics['serve_net_clearance_m'],.02)
        self.assertGreater(physics['return_net_clearance_m'],.02)
        self.assertTrue(-4.115<physics['service_bounce'][0]<0)
        self.assertTrue(12.385<physics['service_bounce'][2]<18.785)
        for f in scene['frames']:self.assertGreaterEqual(f['ball'][1],.0335-1e-9)
        scene['scene']['server']['frames'][50]['positions'][4][1]+=.2
        with self.assertRaisesRegex(ValueError,'fk_consistency'):export(scene,'json')
        with self.assertRaisesRegex(ValueError,'Court scenes export'):
            self.engine.call('finish_animation',{'clip_id':self.created['clip_id'],
                'serve_clip_id':self.serve['clip_id'],'formats':['bvh']})

    @unittest.skipUnless(shutil.which('node'),'Node.js is needed for renderer regression')
    def test_shared_ball_is_dynamic_in_native_scene_export(self):
        result=self.engine.call('finish_animation',{'clip_id':self.created['clip_id'],
            'serve_clip_id':self.serve['clip_id'],'formats':['json']})
        path=result['files'][0]['path'];scene=json.loads(Path(path).read_text())
        command=['node',str(ROOT/'anima/render/export_scene.mjs'),'preview',path]
        data=subprocess.run(command,check=True,capture_output=True,text=True,timeout=90).stdout.splitlines()
        assets=json.loads(data[0])['assets'];shots=[json.loads(row) for row in data[1:]]
        # Identify by exact start position rather than relying on a mesh index.
        expected=scene['frames'][0]['ball']
        ball=next(i for i,m in enumerate(assets['meshes']) if norm(sub(m['matrix'][12:15],expected))<1e-8)
        self.assertTrue(assets['meshes'][ball]['dynamic'])
        for t in (2.10,2.85,3.08):
            for view in (0,1,2):
                shot=next(s for s in shots if abs(s['t']-t)<1e-7 and s['angle']==view)
                matrix=next(u['matrix'] for u in shot['updates'] if u['i']==ball)
                sample=t*scene['fps'];index=int(sample);alpha=sample-index
                first=scene['frames'][index]['ball'];last=scene['frames'][index+1]['ball']
                expected=[a*(1-alpha)+b*alpha for a,b in zip(first,last)]
                self.assertLess(norm(sub(matrix[12:15],expected)),1e-8)
                self.assertEqual(len(shot['torsos']),2)


class CollisionGeometryTests(unittest.TestCase):
    def test_complete_segment_detects_crossing_with_both_endpoints_outside(self):
        sphere=([0,0,0],[0,0,0,1],[1,1,1])
        self.assertLess(segment_ellipsoid_bound([-2,0,0],[2,0,0],sphere,.1),0)
        self.assertAlmostEqual(segment_ellipsoid_bound([-2,2,0],[2,2,0],sphere,.1),.9)
        self.assertLess(segment_ellipsoid_bound([.2,0,0],[.3,0,0],sphere,.1),0)

    def test_triangle_narrowphase_detects_crossing_and_nearby_capsule(self):
        triangle=([0,0,0],[1,0,0],[0,1,0])
        self.assertLess(capsule_surface_bound([.2,.2,-1],[.2,.2,1],.01,[triangle]),0)
        self.assertAlmostEqual(capsule_surface_bound([.2,.2,.04],[.3,.2,.04],.01,[triangle]),.03)
        self.assertLess(capsule_surface_bound([.2,.2,.005],[.3,.2,.005],.01,[triangle]),0)

    def test_broadphase_encloses_rendered_shirt_during_twisting_motion(self):
        with gzip.open(ROOT/'anima/data/forehand_return.json.gz','rt') as f:clip=json.load(f)
        for frame in clip['frames'][::80]:
            shapes=torso_envelope(clip['rig'],frame['positions'],frame['world_rotations'])
            vertices={tuple(v) for tri in torso_triangles(clip['rig'],frame['positions'],frame['world_rotations']) for v in tri}
            for point in vertices:
                distances=[norm([v/r for v,r in zip(rotate(qinv(q),sub(point,center)),radii)]) for center,q,radii in shapes]
                self.assertLessEqual(min(distances),1+1e-9)


if __name__=='__main__':unittest.main()
