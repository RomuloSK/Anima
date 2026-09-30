"""Run the same short workflow a small tool-capable model directs.

From the project folder: python examples/small_model_workflow.py --format json
Use --format mp4 after installing the local video renderer dependencies.
"""
import argparse
import json
from pathlib import Path
import sys
sys.path.insert(0,str(Path(__file__).parents[1]))
from anima.store import Store
from anima.tools import Engine

def main():
    p=argparse.ArgumentParser();p.add_argument('--data',default='project-data')
    p.add_argument('--format',choices=['mp4','json','gltf','bvh'],default='json')
    args=p.parse_args();engine=Engine(Store(args.data))
    take=engine.call('create_animation',{'recipe':'zverev_serve'})
    print(json.dumps(take,indent=2))
    result=engine.call('finish_animation',{'clip_id':take['clip_id'],'formats':[args.format]})
    print(json.dumps(result,indent=2))
    if result['status']!='ready':sys.exit(1)

if __name__=='__main__':main()
