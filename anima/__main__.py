import argparse
import json
from pathlib import Path
from .store import Store
from .tools import Engine,tool_catalog

def main():
    p=argparse.ArgumentParser(description="Anima motion lab — local workbench and LLM tools")
    p.add_argument("command",nargs="?",default="serve",choices=["serve","mcp","tools","call"])
    p.add_argument("--data",default=str(Path.home()/".anima-motion-lab"),help="Shared persistent data directory")
    p.add_argument("--port",type=int,default=8765)
    p.add_argument("--tool",help="Tool name for call")
    p.add_argument("--args",default="{}",help="JSON object for call")
    p.add_argument('--profile',choices=['all','guided'],default='all',help='Compact guided MCP tools or the full advanced catalog')
    a=p.parse_args()
    if a.command=="tools": print(json.dumps(tool_catalog(a.profile),indent=2)); return
    engine=Engine(Store(a.data))
    if a.command=="serve":
        from .server import serve
        serve(engine,a.port)
    elif a.command=="mcp":
        from .mcp import run
        run(engine,profile=a.profile)
    else:
        try: print(json.dumps(engine.call(a.tool,json.loads(a.args)),indent=2,allow_nan=False))
        except (ValueError,TypeError) as exc: p.error(str(exc))

if __name__=="__main__": main()
