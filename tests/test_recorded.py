import copy
import gzip
import json
import tempfile
import unittest
from pathlib import Path
from anima.recorded import load_recorded_serve
from anima.rigs import make_rig, fk
from anima.tools import Engine
from anima.store import Store
from anima.evaluate import evaluate
from anima.exports import export
from anima.math3d import norm, sub, rotate, slerp, euler_quat, dot, unit, mul
from anima.constraints import rotation_distance


class RecordedServeTests(unittest.TestCase):
    @classmethod
    def setUpClass(cls):
        cls.character=make_rig('human',1.86,80)
        cls.clip=load_recorded_serve(cls.character,180)

    def test_preserves_measured_racket_path_and_string_plane(self):
        # Independent comparison against the actual marker array, not a baked
        # expected pose authored by the animation generator.
        path=Path(__file__).parents[1]/'anima/data/tennis_serve_markers.json.gz'
        with gzip.open(path,'rt') as f:source=json.load(f)
        marker_centres=[]
        for row in source['markers']:
            marker_centres.append([(row[1][k]+row[2][k])/2 for k in [1,2,0]])
        scale=self.clip['rig']['scale']
        offset=sub(self.clip['frames'][0]['sweet_spot'],[v*scale for v in marker_centres[0]])
        for i,(frame,center) in enumerate(zip(self.clip['frames'],marker_centres)):
            expected=[v*scale+offset[k] for k,v in enumerate(center)]
            self.assertLess(norm(sub(frame['sweet_spot'],expected)),1e-10)
            row=source['markers'][i]
            lateral=[row[2][k]-row[1][k] for k in [1,2,0]]
            normal=rotate(frame['racket_rotation'],[0,0,1])
            self.assertLess(abs(sum(a*b for a,b in zip(normal,lateral))),1e-10)
        self.assertEqual(len(self.clip['frames']),301)
        self.assertAlmostEqual(self.clip['duration'],300/180)

    def test_scaling_keeps_native_timing_and_fixed_grip(self):
        small=load_recorded_serve(make_rig('human',1.55,60),60)
        large=load_recorded_serve(make_rig('human',2.1,95),60)
        self.assertEqual(small['duration'],large['duration'])
        for a,b in zip(small['frames'],large['frames']):
            for x,y in zip(a['sweet_spot'],b['sweet_spot']):self.assertAlmostEqual(x/1.55,y/2.1,places=10)
        for clip in (small,large):
            report=evaluate(clip)
            self.assertTrue(report['checks']['rigid_grip'])
            self.assertTrue(report['checks']['bone_lengths'])
            self.assertIsNone(report['checks']['joint_limits'])
            self.assertLess(clip['capture_fit']['max_ik_reach_residual_m'],1e-8)

    def test_no_euler_wrap_jump_and_source_not_mutated(self):
        q=slerp(euler_quat([0,179,0]),euler_quat([0,-179,0]),.5)
        self.assertLess(rotate(q,[0,0,1])[2],-.999)
        self.assertEqual(len(self.character['joints']),22)
        bad=copy.deepcopy(self.clip)
        bad['frames'][100]['attachments']['racket']['position'][0]+=.1
        self.assertFalse(evaluate(bad)['checks']['rigid_grip'])

    def test_extended_knee_and_vertical_foot_have_no_axis_flip(self):
        # Regression for the observed 125-degree thigh roll, 125-degree ankle
        # compensation and 83-degree toss-wrist jump in one output frame.
        # This bound detects axis flips; it is not a biomechanical speed limit.
        names={j['name']:i for i,j in enumerate(self.clip['rig']['joints'])}
        for name in ['left_hip','right_hip','left_ankle','right_ankle','left_wrist']:
            k=names[name]
            jumps=[rotation_distance(a['rotations'][k],b['rotations'][k]) for a,b in zip(self.clip['frames'],self.clip['frames'][1:])]
            self.assertLess(max(jumps),15,name)

    def test_knees_bend_forward_throughout_serve_and_interpolation(self):
        # A positive local hinge angle alone missed backward-facing IK poles.
        # Check world-space knee position against the actual foot direction,
        # including fractional playback times used by the slow-motion renderer.
        for clip in (self.clip,load_recorded_serve(self.character,240)):
            names={j['name']:i for i,j in enumerate(clip['rig']['joints'])}
            for first,last in zip(clip['frames'],clip['frames'][1:]):
                for alpha in (0,.5,1):
                    rots=[slerp(a,b,alpha) for a,b in zip(first['rotations'],last['rotations'])]
                    root=[a+(b-a)*alpha for a,b in zip(first['root'],last['root'])]
                    p,_=fk(clip['rig'],root,rots)
                    for side in ('left','right'):
                        hip,knee,ankle,toe=[p[names[side+'_'+part]] for part in ('hip','knee','ankle','toe')]
                        axis=unit(sub(ankle,hip))
                        bend=sub(knee,hip);bend=sub(bend,mul(axis,dot(bend,axis)))
                        forward=sub(toe,ankle);forward=sub(forward,mul(axis,dot(forward,axis)))
                        self.assertGreater(dot(unit(bend),unit(forward)),.69,
                                           (side,first['time'],alpha))

    def test_tool_persistence_attribution_and_exports(self):
        with tempfile.TemporaryDirectory() as folder:
            engine=Engine(Store(folder))
            char=engine.call('create_character',{'species':'human'})
            take=engine.call('load_recording',{'character_id':char['id'],'fps':60})
            header=engine.call('get_clip',{'clip_id':take['id'],'frame_count':0})
            self.assertEqual(header['source']['license'],'CC-BY-4.0')
            self.assertEqual(header['source']['source_file'],'4D_56.mat')
            self.assertIsNone(header['summary']['checks']['joint_limits'])
            c=engine.store.get(take['id'],'clip')
            gltf=json.loads(export(c,'gltf'))
            ri=next(i for i,n in enumerate(gltf['nodes']) if n['name']=='racket')
            wi=next(i for i,n in enumerate(gltf['nodes']) if n['name']=='right_wrist')
            self.assertIn(ri,gltf['nodes'][wi]['children'])
            self.assertIn('Frames: 101',export(c,'bvh'))
            with self.assertRaisesRegex(ValueError,'calibrated'):export(c,'mjcf')


if __name__=='__main__':unittest.main()
