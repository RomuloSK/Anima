import copy
import json
import math
import tempfile
import unittest
from anima.constraints import attachment_transform, require_reachable, rotation_distance, swing_twist, swing_twist_angles
from anima.curves import KeyCurve
from anima.evaluate import evaluate
from anima.exports import gltf, export
from anima.math3d import euler_quat, qmul, qinv, norm, sub
from anima.motion import generate
from anima.rigs import make_rig, fk
from anima.store import Store
from anima.tools import Engine


class ConstraintTests(unittest.TestCase):
    @classmethod
    def setUpClass(cls):
        cls.clip=generate(make_rig('human',1.86,80),action='serve',duration=4.2,fps=120)
        cls.names={j['name']:i for i,j in enumerate(cls.clip['rig']['joints'])}

    def test_serve_final_pose_checks(self):
        report=evaluate(self.clip)
        self.assertEqual(report['status'],'checks_passed',report['metrics'])
        self.assertEqual(len(self.clip['rig']['joints']),26)
        event=self.clip['ball_contact'];f=self.clip['frames'][round(event['time']*120)]
        elbow=f['rotations'][self.names['right_elbow']]
        self.assertLess(rotation_distance(elbow,euler_quat([-8,0,0])),1e-7)
        self.assertLess(report['metrics']['max_grip_rotation_error_deg'],1e-7)
        self.assertLess(report['metrics']['ball_contact_position_error_m'],1e-9)

    def test_grip_is_constant_while_wrist_and_forearm_move(self):
        spec=self.clip['attachments'][0]
        wrist=set();forearm=set()
        for f in self.clip['frames']:
            relative=qmul(qinv(f['world_rotations'][self.names['right_wrist']]),f['attachments']['racket']['rotation'])
            self.assertLess(rotation_distance(relative,spec['local_rotation']),1e-7)
            wrist.add(tuple(round(v,4) for v in f['rotations'][self.names['right_wrist']]))
            forearm.add(tuple(round(v,4) for v in f['rotations'][self.names['right_forearm']]))
        self.assertGreater(len(wrist),100);self.assertGreater(len(forearm),100)

    def test_rejects_old_independent_racket_rotation(self):
        bad=copy.deepcopy(self.clip);f=bad['frames'][250]
        f['attachments']['racket']['rotation']=qmul(f['attachments']['racket']['rotation'],euler_quat([0,30,0]))
        self.assertFalse(evaluate(bad)['checks']['rigid_grip'])
        with self.assertRaisesRegex(ValueError,'export refused'):export(bad,'json')
        with tempfile.TemporaryDirectory() as d:
            with self.assertRaisesRegex(ValueError,'rigid_grip'):Engine(Store(d)).save_clip(bad)

    def test_rejects_smoothing_that_changes_contact_pose(self):
        bad=copy.deepcopy(self.clip);k=round(bad['impact_time']*bad['fps']);f=bad['frames'][k]
        f['rotations'][self.names['right_elbow']]=euler_quat([-47,0,0])
        f['positions'],f['world_rotations']=fk(bad['rig'],f['root'],f['rotations'])
        f['attachments']['racket']=attachment_transform(bad['attachments'][0],bad['rig'],f['positions'],f['world_rotations'])
        self.assertFalse(evaluate(bad)['checks']['pinned_poses'])

    def test_unreachable_target_is_rejected_and_tracking_error_is_detected(self):
        with self.assertRaisesRegex(ValueError,'Unreachable'):require_reachable([0,0,0],[0,2,0],.3,.3)
        bad=copy.deepcopy(self.clip);f=bad['frames'][250]
        f['position_targets']['right_wrist']=[0,3,0]
        self.assertFalse(evaluate(bad)['checks']['target_tracking'])

    def test_forearm_limits_and_nonunit_rotations_are_checked(self):
        bad=copy.deepcopy(self.clip);f=bad['frames'][200]
        f['rotations'][self.names['right_forearm']]=euler_quat([0,110,0])
        self.assertFalse(evaluate(bad)['checks']['joint_limits'])
        f['rotations'][self.names['right_forearm']]=[0,0,0,2]
        self.assertFalse(evaluate(bad)['checks']['rotation_integrity'])

    def test_curves_preserve_keys_and_are_acceleration_continuous(self):
        curve=KeyCurve([(0,0),(1,30),(2,90),(3,80),(4,80)])
        for t,value in [(0,0),(1,30),(2,90),(3,80),(4,80)]:self.assertAlmostEqual(curve(t)[0],value)
        h=1e-4
        for t in [1,2,3]:
            left=(curve(t)[0]-2*curve(t-h)[0]+curve(t-2*h)[0])/h**2
            right=(curve(t+2*h)[0]-2*curve(t+h)[0]+curve(t)[0])/h**2
            self.assertLess(abs(left-right),.5)
        self.assertTrue(all(0<=curve(i/100)[0]<=90 for i in range(401)))

    def test_shoulder_coordinates_round_trip(self):
        for expected in [(25,-30,0),(113,22,79),(134,101,20),(35,0,-20)]:
            actual=swing_twist_angles(swing_twist(*expected))
            for a,b in zip(actual,expected):self.assertAlmostEqual(a,b,places=8)

    def test_serve_api_and_export_keep_racket_parent(self):
        with tempfile.TemporaryDirectory() as d:
            engine=Engine(Store(d));char=engine.call('create_character',{'species':'human'})
            generated=engine.call('generate_motion',{'character_id':char['id'],'action':'serve','duration':4.2,'fps':60})
            self.assertEqual(generated['status'],'checks_passed')
            header=engine.call('get_clip',{'clip_id':generated['id'],'frame_count':0})
            self.assertEqual(header['attachments'][0]['parent_joint'],'right_wrist')
            exported=engine.call('export_motion',{'clip_id':generated['id'],'format':'gltf'})
            with open(exported['path']) as file:data=json.load(file)
            wrist=next(i for i,n in enumerate(data['nodes']) if n['name']=='right_wrist')
            prop=next(i for i,n in enumerate(data['nodes']) if n['name']=='racket')
            self.assertIn(prop,data['nodes'][wrist]['children'])
            self.assertFalse(any(c['target']['node']==prop for c in data['animations'][0]['channels']))

    def test_different_frame_rates_scales_and_durations(self):
        for height,duration,fps in [(1.5,4,24),(2.1,5,60),(1.86,4.2,240)]:
            c=generate(make_rig('human',height),action='serve',duration=duration,fps=fps)
            self.assertEqual(evaluate(c)['status'],'checks_passed')
        with self.assertRaises(ValueError):generate(make_rig('dog',.65),action='serve')
        with self.assertRaises(ValueError):generate(make_rig(),action='serve',duration=1)


if __name__=='__main__':unittest.main()
