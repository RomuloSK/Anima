import copy
import gzip
import io
import json
from pathlib import Path
import tempfile
import unittest
from unittest.mock import patch
from anima.tools import Engine,GUIDED_TOOLS
from anima.store import Store
from anima.mcp import run
from anima.math3d import norm,sub,rotate,euler_quat,add,mul
from anima.quality import release_report
from anima.exports import export


class GuidedWorkflowTests(unittest.TestCase):
    def setUp(self):
        self.tmp=tempfile.TemporaryDirectory();self.addCleanup(self.tmp.cleanup)
        self.engine=Engine(Store(self.tmp.name))

    def create(self,**kwargs):
        result=self.engine.call('create_animation',dict(recipe='zverev_serve',**kwargs))
        self.assertEqual(result['quality']['status'],'checks_passed')
        return self.engine.store.get(result['clip_id'],'clip')

    def test_reference_recipe_reproduces_accepted_geometry_and_ball(self):
        with gzip.open(Path(__file__).parents[1]/'anima/data/zverev_serve.json.gz','rt') as f:reference=json.load(f)
        clip=self.create()
        self.assertEqual(len(clip['frames']),649)
        self.assertEqual(clip['source']['file'],'52102.webm')
        self.assertFalse(clip['generated_by']['base_motion_capture'])
        for a,b in zip(reference['frames'],clip['frames']):
            for x,y in zip(a['positions'],b['positions']):self.assertLess(norm(sub(x,y)),1e-11)
            self.assertEqual(a['ball'],b['ball'])
        self.assertGreater(clip['evaluation']['metrics']['minimum_knee_forward_alignment'],.70)

    def test_director_responses_are_bounded_and_unknown_checks_honest(self):
        result=self.engine.call('create_animation',{'recipe':'zverev_serve'})
        self.assertLess(len(json.dumps(result)),2600)
        self.assertNotIn('frames',result)
        self.assertIn('joint_limits',result['quality']['unknown_checks'])
        self.assertEqual(len(GUIDED_TOOLS),5)
        self.assertLess(len(json.dumps(GUIDED_TOOLS)),9000)
        choices=self.engine.call('list_motion_recipes',{'query':'Zverev'})
        self.assertEqual(choices['recipes'][0]['id'],'zverev_serve')

    def test_retarget_tempo_and_heading_preserve_release_constraints(self):
        for kwargs in [{'height':1.6,'tempo':.75,'heading':130,'origin':[2,0,-1]},
                       {'height':2.2,'tempo':1.25,'heading':-60}]:
            clip=self.create(**kwargs)
            self.assertTrue(clip['evaluation']['checks']['rigid_grip'])
            self.assertTrue(clip['evaluation']['checks']['forward_knees'])
            self.assertTrue(clip['evaluation']['checks']['ball_contact'])
        base=self.create();moved=self.create(heading=90,origin=[1,0,2])
        for a,b in zip(base['frames'][::40],moved['frames'][::40]):
            expected=add(rotate(euler_quat([0,90,0]),a['root']),[1,0,2])
            self.assertLess(norm(sub(expected,b['root'])),1e-10)

    def test_corrupt_cached_geometry_is_blocked_and_revision_restores_recipe(self):
        clip=self.create();bad=copy.deepcopy(clip)
        bad['frames'][20]['positions'][5][1]-=.1
        bad['frames'][30]['attachments']['racket']['position'][0]+=.2
        self.assertEqual(release_report(bad)['status'],'needs_review')
        with self.assertRaisesRegex(ValueError,'release blocked'):export(bad,'gltf')
        saved=self.engine.store.put('clip',bad)
        result=self.engine.call('revise_animation',{'clip_id':saved['id']})
        restored=self.engine.store.get(result['clip_id'],'clip')
        self.assertNotEqual(restored['id'],saved['id'])
        self.assertEqual(restored['evaluation']['status'],'checks_passed')
        self.assertEqual(self.engine.store.get(saved['id'],'clip')['frames'][20]['positions'],bad['frames'][20]['positions'])

    def test_export_files_real_and_grip_parented_in_gltf(self):
        clip=self.create()
        result=self.engine.call('finish_animation',{'clip_id':clip['id'],'formats':['json','gltf','bvh']})
        self.assertEqual(result['status'],'ready')
        for item in result['files']:self.assertEqual(Path(item['path']).stat().st_size,item['bytes'])
        gltf=json.loads(Path(result['files'][1]['path']).read_text())
        wrist=next(i for i,n in enumerate(gltf['nodes']) if n['name']=='right_wrist')
        racket=next(i for i,n in enumerate(gltf['nodes']) if n['name']=='racket')
        self.assertIn(racket,gltf['nodes'][wrist]['children'])

    def test_invalid_input_and_floor_penetration_save_nothing(self):
        for args in [{'recipe':'made_up'},{'recipe':'zverev_serve','tempo':4},
                     {'recipe':'zverev_serve','origin':[0,-1,0]},
                     {'recipe':'zverev_serve','heading':float('nan')}]:
            with self.assertRaises(ValueError):self.engine.call('create_animation',args)
        self.assertEqual(self.engine.store.list('clip'),[])
        self.assertEqual(self.engine.store.list('character'),[])

    def test_authored_serve_retiming_retains_exact_contact_pose(self):
        result=self.engine.call('create_animation',{'recipe':'human_serve','height':1.5,'tempo':.75,'heading':50})
        self.assertEqual(result['quality']['status'],'checks_passed')
        clip=self.engine.store.get(result['clip_id'],'clip')
        self.assertTrue(clip['evaluation']['checks']['pinned_poses'])
        self.assertTrue(clip['evaluation']['checks']['target_tracking'])

    def test_all_builtin_recipes_work_through_the_same_director(self):
        recipes=self.engine.call('list_motion_recipes',{})['recipes']
        for recipe in recipes:
            with self.subTest(recipe=recipe['id']):
                result=self.engine.call('create_animation',{'recipe':recipe['id']})
                self.assertEqual(result['quality']['status'],'checks_passed')

    def test_missing_video_dependencies_never_report_ready(self):
        clip=self.create()
        with patch('anima.video.availability',return_value={'available':False,'missing':['ffmpeg']}):
            result=self.engine.call('finish_animation',{'clip_id':clip['id'],'formats':['mp4','json']})
        self.assertEqual(result['status'],'export_incomplete')
        self.assertEqual(result['files'][0]['status'],'needs_dependency')
        self.assertEqual(result['files'][1]['status'],'ready')
        self.assertNotIn('path',result['files'][0])

    def test_guided_mcp_discovery_creation_and_hidden_advanced_tools(self):
        requests=[{'jsonrpc':'2.0','id':1,'method':'initialize'},
                  {'jsonrpc':'2.0','method':'notifications/initialized'},
                  {'jsonrpc':'2.0','id':2,'method':'tools/list'},
                  {'jsonrpc':'2.0','id':3,'method':'tools/call','params':{'name':'create_animation','arguments':{'recipe':'zverev_serve'}}},
                  {'jsonrpc':'2.0','id':4,'method':'tools/call','params':{'name':'define_pose','arguments':{}}}]
        out=io.StringIO();run(self.engine,io.StringIO('\n'.join(json.dumps(x) for x in requests)),out,profile='guided')
        replies=[json.loads(line) for line in out.getvalue().splitlines()]
        self.assertEqual([t['name'] for t in replies[1]['result']['tools']],[t['name'] for t in GUIDED_TOOLS])
        self.assertEqual(replies[2]['result']['structuredContent']['quality']['status'],'checks_passed')
        self.assertTrue(replies[3]['result']['isError'])


class ReferenceImportTests(unittest.TestCase):
    def setUp(self):
        self.manifest=json.loads((Path(__file__).parents[1]/'examples/zverev_reference.json').read_text())

    def test_reference_manifest_rejects_bad_observations_and_event_order(self):
        from anima.reference_motion import validate_manifest
        for modify in [lambda m:m['landmarks'][0]['points'].pop('right_wrist'),
                       lambda m:m.update(impact_time=m['release_time']),
                       lambda m:m['landmarks'][0]['points']['head'].__setitem__(1,float('nan')),
                       lambda m:m['controls']['yaw'].__setitem__(0,[7,58])]:
            data=copy.deepcopy(self.manifest);modify(data)
            with self.assertRaises(ValueError):validate_manifest(data)

    def test_screen_space_import_lifts_depth_inside_engine(self):
        try:import scipy
        except ImportError:self.skipTest('Install reference extra')
        source=json.loads((Path(__file__).parents[1]/'examples/zverev_reference_2d.json').read_text())
        selected=[0,8,18,30]
        source['landmarks']=[source['landmarks'][i] for i in selected]
        source['camera']['pan_offsets_px']=[source['camera']['pan_offsets_px'][i] for i in selected]
        with tempfile.TemporaryDirectory() as d:
            inbox=Path(d)/'references';inbox.mkdir();(inbox/'screen.json').write_text(json.dumps(source))
            engine=Engine(Store(d));result=engine.call('import_reference_motion',{'manifest_file':'screen.json'})
            self.assertEqual(result['status'],'ready')
            self.assertLess(result['lifting_report']['median_reprojection_error_px'],10)
            self.assertLess(result['lifting_report']['maximum_reprojection_error_px'],60)
            take=engine.call('create_animation',{'recipe':result['recipe_id']})
            self.assertEqual(take['quality']['status'],'checks_passed')
            clip=engine.store.get(take['clip_id'],'clip')
            self.assertTrue(clip['source']['depth_is_estimated'])

    def test_screen_space_camera_and_nonfinite_data_are_rejected(self):
        try:import scipy
        except ImportError:self.skipTest('Install reference extra')
        from anima.reference_lifting import lift_2d
        source=json.loads((Path(__file__).parents[1]/'examples/zverev_reference_2d.json').read_text())
        for modify in [lambda m:m['camera'].update(right=[1,1,0]),
                       lambda m:m['camera'].update(pixels_per_metre=float('nan')),
                       lambda m:m['landmarks'][0]['points']['head'].__setitem__(0,float('nan'))]:
            data=copy.deepcopy(source);modify(data)
            with self.assertRaises(ValueError):lift_2d(data)

    def test_manifest_import_reconstructs_the_accepted_take(self):
        try:import scipy
        except ImportError:self.skipTest('Install reference extra')
        with tempfile.TemporaryDirectory() as d:
            inbox=Path(d)/'references';inbox.mkdir();(inbox/'reference.json').write_text(json.dumps(self.manifest))
            engine=Engine(Store(d));result=engine.call('import_reference_motion',{'manifest_file':'reference.json'})
            self.assertEqual(result['status'],'ready')
            created=engine.call('create_animation',{'recipe':result['recipe_id']})
            clip=engine.store.get(created['clip_id'],'clip')
            with gzip.open(Path(__file__).parents[1]/'anima/data/zverev_serve.json.gz','rt') as f:expected=json.load(f)
            for actual,reference in zip(clip['frames'][::20],expected['frames'][::20]):
                for a,b in zip(actual['positions'],reference['positions']):self.assertLess(norm(sub(a,b)),1e-10)
            with self.assertRaises(ValueError):engine.call('import_reference_motion',{'manifest_file':'../reference.json'})


if __name__=='__main__':unittest.main()
