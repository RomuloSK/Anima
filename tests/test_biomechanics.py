import copy
import tempfile
import unittest
from anima import biomechanics as body
from anima.rigs import make_rig, fk
from anima.math3d import euler_quat, norm, sub
from anima.tools import Engine, TOOLS
from anima.store import Store
from anima.quality import release_report
from anima.exports import export
from anima.physics import to_mjcf


class CoupledBodyTests(unittest.TestCase):
    def setUp(self):
        self.rig=body.body_rig(make_rig())

    def test_girdle_is_required_for_overhead_elevation(self):
        c,_,_=body.resolve(self.rig,{'right_arm_elevation':160})
        self.assertAlmostEqual(c['right_girdle_up'],160/3)
        with self.assertRaisesRegex(ValueError,'right_arm_elevation'):
            body.resolve(self.rig,{'right_arm_elevation':160},{'coordinate_shoulders':False})
        c,changes,ranges=body.resolve(self.rig,{'right_arm_elevation':160},{'coordinate_shoulders':False},'project')
        self.assertEqual(c['right_arm_elevation'],120)
        self.assertEqual(changes[0]['drivers'],{'right_girdle_up':0})
        c,_,_=body.resolve(self.rig,{'right_arm_elevation':160,'right_girdle_up':50},{'coordinate_shoulders':False})
        self.assertEqual(c['right_arm_elevation'],160)

    def test_knee_changes_hip_and_ankle_envelopes(self):
        straight=body.envelope(self.rig,{})
        bent=body.envelope(self.rig,{'right_knee_flexion':90})
        self.assertEqual(straight['right_hip_flexion'][1],85)
        self.assertEqual(bent['right_hip_flexion'][1],125)
        self.assertEqual(straight['right_ankle_dorsiflexion'][1],25)
        self.assertEqual(bent['right_ankle_dorsiflexion'][1],45)
        with self.assertRaises(ValueError):body.resolve(self.rig,{'right_hip_flexion':100})
        self.assertTrue(body.preview(self.rig,{'right_hip_flexion':100,'right_knee_flexion':90})['valid'])

    def test_combined_trunk_neck_and_wrist_end_ranges(self):
        for coords in [{'trunk_flexion':60,'trunk_twist':10},
                       {'neck_flexion':45,'neck_turn':10},
                       {'right_wrist_flexion':70,'right_wrist_deviation':10}]:
            with self.subTest(coords=coords),self.assertRaises(ValueError):body.resolve(self.rig,coords)
        self.assertGreater(body.envelope(self.rig,{'pelvis_turn':90})['trunk_twist'][1],60)

    def test_profile_settings_are_immutable_and_cannot_widen_mobility(self):
        narrow=body.body_rig(self.rig,{'mobility':.7})
        self.assertEqual(body.settings_for(self.rig)['mobility'],1)
        self.assertLess(body.envelope(narrow,{})['right_hip_flexion'][1],85)
        with self.assertRaises(ValueError):body.body_rig(self.rig,{'mobility':1.1})
        self.assertAlmostEqual(sum(j['mass_kg'] for j in narrow['joints']),narrow['mass'])
        self.assertEqual(len(narrow['joints']),28)

    def test_preview_identifies_chest_collision(self):
        result=body.preview(self.rig,{'right_arm_elevation':90,'right_arm_plane':-60,'right_elbow_flexion':90})
        self.assertFalse(result['valid'])
        self.assertFalse(result['checks']['arm_torso_clearance'])
        self.assertEqual(result['metrics']['arm_torso_worst_sample']['part'],'right_upper_arm')
        stripped=copy.deepcopy(result['preview']);stripped['rig'].pop('biomechanics');stripped['rig'].pop('body_clearance_model')
        self.assertFalse(release_report(stripped)['checks']['arm_torso_clearance'])
        with self.assertRaisesRegex(ValueError,'arm_torso_clearance'):export(stripped,'json')
        self.assertTrue(body.preview(self.rig,{})['valid'])

    def test_constraints_come_from_rotations_not_forged_metadata(self):
        clip=body.preview(self.rig,{})['preview'];clip=copy.deepcopy(clip)
        names={j['name']:i for i,j in enumerate(clip['rig']['joints'])}
        frame=clip['frames'][0]
        frame['rotations'][names['right_knee']]=euler_quat([-20,0,0])
        frame['positions'],frame['world_rotations']=fk(clip['rig'],frame['root'],frame['rotations'])
        clip['rig'].pop('biomechanics');clip['rig'].pop('body_clearance_model')
        self.assertFalse(release_report(clip)['checks']['coupled_body_limits'])
        with self.assertRaisesRegex(ValueError,'release blocked'):export(clip,'json')

    def test_unrepresented_joint_axes_are_rejected(self):
        for name,angles in [('right_knee',[20,20,0]),('right_clavicle',[0,0,25])]:
            clip=body.preview(self.rig,{})['preview'];frame=clip['frames'][0]
            i=next(i for i,j in enumerate(self.rig['joints']) if j['name']==name)
            frame['rotations'][i]=euler_quat(angles)
            frame['positions'],frame['world_rotations']=fk(self.rig,frame['root'],frame['rotations'])
            self.assertFalse(release_report(clip)['checks']['coupled_body_limits'])

    def test_whole_curve_is_checked_not_only_keyframes(self):
        start={'right_arm_elevation':40,'right_arm_plane':180}
        end={'right_arm_elevation':175,'right_arm_plane':0}
        body.resolve(self.rig,start);body.resolve(self.rig,end)
        with self.assertRaisesRegex(ValueError,'Body constraint'):
            body.animate(self.rig,[{'time':0,'coordinates':start},{'time':2,'coordinates':end}],fps=30)

    def test_smooth_motion_retimes_instead_of_clamping_samples(self):
        keys=[{'time':0,'coordinates':{}},{'time':.25,'coordinates':{'right_arm_elevation':140}}]
        with self.assertRaisesRegex(ValueError,'budgets'):
            body.animate(self.rig,keys,fps=30,options={'auto_timing':False})
        clip=body.animate(self.rig,keys,fps=30)
        self.assertGreater(clip['duration'],.25)
        self.assertEqual(clip['timing']['actual_duration'],clip['duration'])
        self.assertTrue(clip['evaluation']['checks']['temporal_budgets'])
        self.assertTrue(clip['evaluation']['checks']['coupled_body_limits'])
        self.assertLess(clip['evaluation']['metrics']['max_bone_length_error_m'],1e-10)
        end=body.coordinates_from_rotations(clip['rig'],clip['frames'][-1]['rotations'])
        self.assertAlmostEqual(end['right_arm_elevation'],140)
        with self.assertRaisesRegex(ValueError,'calibrated'):to_mjcf(clip['rig'])


class BodyInterfaceTests(unittest.TestCase):
    def setUp(self):
        self.tmp=tempfile.TemporaryDirectory();self.addCleanup(self.tmp.cleanup)
        self.engine=Engine(Store(self.tmp.name));self.rig=self.engine.call('create_character',{})

    def call(self,name,**args):return self.engine.call(name,dict(character_id=self.rig['id'],**args))

    def test_catalog_is_complete_and_read_only_preview_saves_nothing(self):
        self.assertEqual(len(TOOLS),22)
        controls=self.call('describe_body_controls')
        self.assertEqual(len(controls['controls']),35)
        self.assertEqual(len(controls['options_schema']),3)
        self.assertFalse(self.call('preview_body_pose',coordinates={'right_arm_elevation':90,'right_arm_plane':-60})['valid'])
        self.assertEqual(self.engine.store.list('clip'),[])
        self.assertEqual(len(self.engine.store.list('character')),1)

    def test_errors_do_not_save_partial_assets(self):
        for args in [dict(coordinates={'unknown':3}),dict(coordinates={'trunk_twist':float('nan')}),
                     dict(coordinates={},options={'disable_limits':True}),dict(coordinates={},on_limit='ignore')]:
            with self.subTest(args=args),self.assertRaises(ValueError):self.call('preview_body_pose',**args)
        with self.assertRaises(ValueError):self.call('define_pose',joint_angles={'right_shoulder':[0,0,-60]})
        with self.assertRaises(ValueError):self.call('animate_body',keyframes=[{'time':0,'coordinates':{}},{'time':0,'coordinates':{}}])
        self.assertEqual(len(self.engine.store.list('character')),1)
        self.assertEqual(self.engine.store.list('clip'),[])

    def test_api_animation_and_exports_use_the_same_gates(self):
        result=self.call('animate_body',keyframes=[{'time':0,'coordinates':{}},{'time':1.5,'coordinates':{'right_arm_elevation':100}}],fps=30)
        self.assertEqual(result['status'],'checks_passed')
        self.assertEqual(result['body_profile'],body.PROFILE)
        clip=self.engine.store.get(result['id'],'clip')
        self.assertTrue(clip['evaluation']['checks']['limb_clearance'])
        header=self.engine.call('get_clip',{'clip_id':result['id'],'frame_count':0})
        self.assertIsNotNone(header['body_request'])
        exported=self.engine.call('finish_animation',{'clip_id':result['id'],'formats':['json']})
        self.assertEqual(exported['status'],'ready')
        revised=self.call('configure_body',settings={'mobility':.8})
        self.assertNotEqual(revised['id'],self.rig['id'])
        self.assertNotIn('biomechanics',self.engine.store.get(self.rig['id'],'character'))



class InterpolationRegressionTests(unittest.TestCase):
    def test_dense_retiming_spline_keeps_samples_and_continuous_acceleration(self):
        from anima.curves import SampleSpline
        values=[[0.,2.],[1.,3.],[.5,-1.],[2.,0.],[1.,4.]]
        curve=SampleSpline(values);h=1e-4
        for i,v in enumerate(values):self.assertEqual(curve(i),v)
        for i in range(1,len(values)-1):
            left=[(a-2*b+c)/h**2 for a,b,c in zip(curve(i-2*h),curve(i-h),curve(i))]
            right=[(a-2*b+c)/h**2 for a,b,c in zip(curve(i),curve(i+h),curve(i+2*h))]
            self.assertLess(norm(sub(left,right)),.01)

    def test_foot_path_matches_stance_velocity_and_acceleration_at_seams(self):
        from anima.motion import foot_path
        period=1.;duty=.62;h=1e-5
        def sample(t):return foot_path(t,period,0,duty,1.2,.09,.07)[:2]
        for t in (duty,period):
            left=[(b-a)/h for a,b in zip(sample(t-h),sample(t))]
            right=[(b-a)/h for a,b in zip(sample(t),sample(t+h))]
            self.assertLess(norm(sub(left,right)),1e-5)
            left=[(a-2*b+c)/h**2 for a,b,c in zip(sample(t-2*h),sample(t-h),sample(t))]
            right=[(a-2*b+c)/h**2 for a,b,c in zip(sample(t),sample(t+h),sample(t+2*h))]
            self.assertLess(norm(sub(left,right)),.02)

    def test_authored_serve_works_after_selecting_a_body_profile(self):
        with tempfile.TemporaryDirectory() as d:
            engine=Engine(Store(d));r=engine.call('create_character',{})
            r=engine.call('configure_body',{'character_id':r['id']})
            result=engine.call('generate_motion',{'character_id':r['id'],'action':'serve','duration':3,'fps':30})
            self.assertEqual(result['status'],'checks_passed')
            self.assertEqual(result['backend'],'constrained_kinematic')
            self.assertIsNone(result['body_profile'])
            self.assertEqual(len(engine.store.list('clip')),1)

if __name__=='__main__':unittest.main()
