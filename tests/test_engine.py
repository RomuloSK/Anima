import base64
import io
import json
import math
import struct
import tempfile
import threading
import unittest
import urllib.error
import urllib.request
from anima.rigs import make_rig,fk
from anima.motion import generate
from anima.math3d import norm,sub,euler_quat,quat_euler,rotate,solve_two_bone
from anima.evaluate import evaluate
from anima.exports import bvh,gltf
from anima.physics import available,simulate
from anima.tools import Engine,TOOLS
from anima.store import Store
from anima.mcp import run
from anima.server import make_server

class GeometryTests(unittest.TestCase):
    def test_rotation_convention(self):
        self.assertLess(norm(sub(rotate(euler_quat([90,0,0]),[0,-1,0]),[0,0,-1])),1e-12)
        for angles in [[20,30,-40],[-40,5,120],[80,-20,10]]:
            a=euler_quat(angles); b=euler_quat(quat_euler(a))
            self.assertLess(min(norm(sub(a,b)),norm([x+y for x,y in zip(a,b)])),1e-10)

    def test_ik_lengths_reach_and_singularities(self):
        for target,pole in [([0,.3,.2],[0,1,1]),([0,-4,0],[0,-1,0]),([0,1,0],[0,1,0])]:
            result=solve_two_bone([0,1,0],target,pole,.43,.39)
            self.assertAlmostEqual(norm(sub(result['root'],result['middle'])),.43,places=9)
            self.assertAlmostEqual(norm(sub(result['middle'],result['end'])),.39,places=9)
            self.assertLessEqual(result['bend_degrees'],155.000001)
            self.assertAlmostEqual(norm(sub(result['end'],target)),result['residual_m'],places=9)
        r=solve_two_bone([0,1,0],[0,.3,.2],[0,1,1],.43,.39)
        self.assertTrue(r['reachable'])
        r=solve_two_bone([0,0,0],[0,-4,0],[0,0,1],.4,.4)
        self.assertFalse(r['reachable']); self.assertAlmostEqual(r['residual_m'],3.2)

    def test_all_motion_families(self):
        for species,actions in [('human',['idle','walk','run','jump','squat','wave']),('dog',['idle','walk','trot'])]:
            for action in actions:
                with self.subTest(species=species,action=action):
                    rig=make_rig(species,1.75 if species=='human' else .65)
                    clip=generate(rig,action,duration=2,fps=60)
                    report=evaluate(clip)
                    self.assertEqual(report['status'],'checks_passed')
                    self.assertEqual(len(clip['frames']),121)
                    for frame in clip['frames'][::15]:
                        pos,_=fk(rig,frame['root'],frame['rotations'])
                        for a,b in zip(pos,frame['positions']): self.assertLess(norm(sub(a,b)),1e-10)

    def test_stance_contacts_do_not_skate(self):
        for species,height in [('human',1.2),('human',2.1),('dog',.4),('dog',.9)]:
            for stride in [.5,1,1.35]:
                clip=generate(make_rig(species,height),'walk',duration=2,speed=1.6,stride_scale=stride)
                self.assertLess(evaluate(clip)['metrics']['stance_foot_slip_max_m_s'],1e-8)

    def test_jump_airborne_acceleration(self):
        clip=generate(make_rig(),'jump',duration=2,jump_height=.4,fps=120)
        ys=[f['root'][1] for f in clip['frames']]
        for i in range(65,115): self.assertAlmostEqual((ys[i+1]-2*ys[i]+ys[i-1])*120**2,-9.81,places=7)

    def test_generator_is_deterministic(self):
        r=make_rig(); self.assertEqual(generate(r,'walk',duration=1),generate(r,'walk',duration=1))

    def test_walk_root_has_no_support_switch_cusps(self):
        report=evaluate(generate(make_rig(),'walk',duration=4))
        self.assertLess(report['metrics']['root_jerk_rms_m_s3'],100)

    def test_bad_species_motion_and_short_jump(self):
        with self.assertRaises(ValueError): make_rig('bird')
        with self.assertRaises(ValueError): generate(make_rig('dog',.65),'wave')
        with self.assertRaises(ValueError): generate(make_rig(),'jump',duration=.5)

    def test_evaluator_catches_corruption(self):
        clip=generate(make_rig(),'walk',duration=1)
        clip['frames'][20]['positions'][7][1]-=.2
        self.assertFalse(evaluate(clip)['checks']['bone_lengths'])

class ExportTests(unittest.TestCase):
    @classmethod
    def setUpClass(cls): cls.clip=generate(make_rig(),'walk',duration=1,fps=30)
    def test_bvh_has_consistent_channel_and_frame_counts(self):
        result=bvh(self.clip); motion=result.split('MOTION\n')[1].splitlines()
        self.assertEqual(motion[0],'Frames: 31')
        self.assertEqual(len(motion[2:]),31)
        for line in motion[2:]: self.assertEqual(len(line.split()),3+3*len(self.clip['rig']['joints']))
        self.assertEqual(result.count('{'),result.count('}'))
    def test_gltf_embedded_animation_round_trip(self):
        result=json.loads(gltf(self.clip)); blob=base64.b64decode(result['buffers'][0]['uri'].split(',')[1])
        self.assertEqual(len(blob),result['buffers'][0]['byteLength'])
        animation=result['animations'][0]
        for channel in animation['channels']:
            acc=result['accessors'][animation['samplers'][channel['sampler']]['output']]
            view=result['bufferViews'][acc['bufferView']]
            n=4 if channel['target']['path']=='rotation' else 3
            values=struct.unpack('<'+'f'*(view['byteLength']//4),blob[view['byteOffset']:view['byteOffset']+view['byteLength']])
            expected=self.clip['frames'][15]['rotations'][channel['target']['node']] if n==4 else self.clip['frames'][15]['root']
            for a,b in zip(values[15*n:16*n],expected): self.assertAlmostEqual(a,b,places=6)

class InterfaceTests(unittest.TestCase):
    def setUp(self):
        self.tmp=tempfile.TemporaryDirectory(); self.engine=Engine(Store(self.tmp.name))
        self.rig=self.engine.call('create_character',{'species':'human'})
    def tearDown(self): self.tmp.cleanup()
    def test_validation_rejects_nan_unknowns_and_out_of_range(self):
        bad=[{'height':math.nan},{'species':'horse'},{'mass':-1},{'height':True},{'unused':4}]
        for args in bad:
            with self.assertRaises(ValueError): self.engine.call('create_character',args)
        with self.assertRaises(ValueError): self.engine.call('define_pose',{'character_id':self.rig['id'],'joint_angles':{'left_knee':[-1,0,0]}})
    def test_persistence_pagination_and_export(self):
        result=self.engine.call('generate_motion',{'character_id':self.rig['id'],'action':'walk','duration':1})
        other=Engine(Store(self.tmp.name)); self.assertEqual(len(other.call('list_assets',{})['clips']),1)
        frames=other.call('get_clip',{'clip_id':result['id'],'frame_start':5,'frame_count':7})
        self.assertEqual(len(frames['frames']),7); self.assertEqual(frames['next_frame_start'],12)
        from pathlib import Path
        for fmt in ['bvh','gltf','json']:
            out=other.call('export_motion',{'clip_id':result['id'],'format':fmt})
            self.assertTrue(Path(out['path']).is_file());self.assertGreater(out['bytes'],0)
        with self.assertRaisesRegex(ValueError,'calibrated'):other.call('export_motion',{'clip_id':result['id'],'format':'mjcf'})
        with self.assertRaises(ValueError): other.call('export_motion',{'clip_id':result['id'],'format':'../../evil'})
    def test_define_pose_and_joint_limits(self):
        result=self.engine.call('define_pose',{'character_id':self.rig['id'],'joint_angles':{'right_shoulder':[0,0,145]}})
        clip=self.engine.store.get(result['id'])
        from anima.biomechanics import coordinates_from_rotations
        self.assertAlmostEqual(coordinates_from_rotations(clip['rig'],clip['frames'][0]['rotations'])['right_arm_elevation'],145)
    def test_mcp_lifecycle_tool_list_and_errors(self):
        messages=[{'jsonrpc':'2.0','id':1,'method':'initialize','params':{'protocolVersion':'2025-06-18','capabilities':{},'clientInfo':{'name':'test','version':'1'}}},{'jsonrpc':'2.0','method':'notifications/initialized'},{'jsonrpc':'2.0','id':2,'method':'tools/list'},{'jsonrpc':'2.0','id':3,'method':'tools/call','params':{'name':'describe_capabilities','arguments':{}}},{'jsonrpc':'2.0','id':4,'method':'tools/call','params':{'name':'no_such_tool'}},{'jsonrpc':'2.0','id':5,'method':'unknown'}]
        out=io.StringIO();run(self.engine,io.StringIO('\n'.join(json.dumps(x) for x in messages)+'\n'),out)
        replies=[json.loads(x) for x in out.getvalue().splitlines()]
        self.assertEqual(len(replies),5);self.assertEqual(replies[0]['result']['protocolVersion'],'2025-06-18')
        self.assertEqual(len(replies[1]['result']['tools']),len(TOOLS));self.assertFalse(replies[2]['result']['isError'])
        self.assertTrue(replies[3]['result']['isError']);self.assertEqual(replies[4]['error']['code'],-32601)
    def test_mcp_invalid_json(self):
        out=io.StringIO();run(self.engine,io.StringIO('{bad\n'),out)
        self.assertEqual(json.loads(out.getvalue())['error']['code'],-32700)
    def test_mcp_subprocess_generates_a_persisted_clip(self):
        import subprocess,sys
        messages=[{'jsonrpc':'2.0','id':1,'method':'initialize','params':{'protocolVersion':'2025-06-18'}},{'jsonrpc':'2.0','method':'notifications/initialized'},{'jsonrpc':'2.0','id':2,'method':'tools/call','params':{'name':'generate_motion','arguments':{'character_id':self.rig['id'],'action':'walk','duration':1}}}]
        proc=subprocess.run([sys.executable,'-m','anima','mcp','--data',self.tmp.name],input='\n'.join(json.dumps(x) for x in messages)+'\n',text=True,capture_output=True,timeout=20)
        self.assertEqual(proc.returncode,0,proc.stderr)
        replies=[json.loads(x) for x in proc.stdout.splitlines()]
        self.assertEqual(len(replies),2);self.assertFalse(replies[1]['result']['isError'])
        ident=replies[1]['result']['structuredContent']['id']
        clip=self.engine.store.get(ident,'clip')
        self.assertEqual(len(clip['frames']),round(clip['duration']*clip['fps'])+1)
        self.assertTrue(clip['evaluation']['checks']['temporal_budgets'])
    def test_http_roundtrip_and_origin_guard(self):
        server=make_server(self.engine,0);thread=threading.Thread(target=server.serve_forever,daemon=True);thread.start()
        try:
            base=f'http://127.0.0.1:{server.server_port}'
            with urllib.request.urlopen(base+'/api/tools') as r: self.assertEqual(len(json.load(r)['tools']),len(TOOLS))
            data=json.dumps({'name':'generate_motion','arguments':{'character_id':self.rig['id'],'action':'walk','duration':1}}).encode()
            req=urllib.request.Request(base+'/api/call',data,{'Content-Type':'application/json'})
            with urllib.request.urlopen(req) as r: result=json.load(r)
            with urllib.request.urlopen(base+'/api/clips/'+result['id']) as r:
                clip=json.load(r);self.assertEqual(len(clip['frames']),round(clip['duration']*clip['fps'])+1)
                self.assertTrue(clip['evaluation']['checks']['coupled_body_limits'])
            bad=urllib.request.Request(base+'/api/call',data,{'Content-Type':'application/json','Origin':'https://example.com'})
            with self.assertRaises(urllib.error.HTTPError) as ctx: urllib.request.urlopen(bad)
            self.assertEqual(ctx.exception.code,403)
        finally: server.shutdown();server.server_close();thread.join()

@unittest.skipUnless(available(),'Install .[physics] to run MuJoCo integration checks')
class PhysicsTests(unittest.TestCase):
    def test_passive_dynamics_is_finite_contacting_and_repeatable(self):
        for species,height in [('human',1.75),('dog',.65)]:
            rig=make_rig(species,height)
            a=simulate(rig,duration=2);b=simulate(rig,duration=2)
            self.assertEqual(a['frames'],b['frames'])
            self.assertTrue(all(n==0 for n in a['physics_report']['solver_warning_counts']))
            self.assertGreater(a['physics_report']['max_contact_count'],0)
            self.assertGreater(a['physics_report']['peak_contact_force_n'],0)
            self.assertLess(evaluate(a)['metrics']['max_bone_length_error_m'],1e-6)
            self.assertLess(a['frames'][-1]['root'][1],a['frames'][0]['root'][1])

if __name__=='__main__': unittest.main()
