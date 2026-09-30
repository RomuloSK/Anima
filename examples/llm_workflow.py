"""Run the exact tool sequence an external LLM can use, without an API key."""
import json
import sys
from pathlib import Path
sys.path.insert(0,str(Path(__file__).resolve().parents[1]))
from anima.store import Store
from anima.tools import Engine

engine=Engine(Store(Path(__file__).resolve().parents[1]/"example-output"))
rig=engine.call("create_character",{"species":"human","name":"Example actor","height":1.8,"mass":78})
clip=engine.call("generate_motion",{"character_id":rig["id"],"action":"walk","duration":4,"speed":1.2,"fps":60})
report=engine.call("evaluate_motion",{"clip_id":clip["id"]})
print(json.dumps({"clip":clip,"checks":report["checks"]},indent=2))
for fmt in ("bvh","gltf","json","mjcf"):
    print(engine.call("export_motion",{"clip_id":clip["id"],"format":fmt})["path"])
