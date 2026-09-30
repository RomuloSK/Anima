"""Synchronous MCP stdio server targeting protocol revision 2025-06-18."""
import json
import sys
from .tools import tool_catalog
from . import __version__

def run(engine,reader=None,writer=None,profile='all'):
    reader=reader or sys.stdin; writer=writer or sys.stdout
    initialized=False; negotiated=False;catalog=tool_catalog(profile)
    from .guided import INSTRUCTIONS
    def send(obj):
        writer.write(json.dumps(obj,allow_nan=False,separators=(",",":"))+"\n"); writer.flush()
    for line in reader:
        request=None; ident=None
        try:
            if len(line)>2_000_000: raise ValueError("Request exceeds 2 MB")
            request=json.loads(line)
            if not isinstance(request,dict) or request.get("jsonrpc")!="2.0" or not isinstance(request.get("method"),str):
                send({"jsonrpc":"2.0","id":None,"error":{"code":-32600,"message":"Invalid request"}}); continue
            ident=request.get("id"); method=request["method"]; params=request.get("params",{})
            if "id" not in request:
                if method=="notifications/initialized" and negotiated: initialized=True
                continue
            if not isinstance(params,dict):
                send({"jsonrpc":"2.0","id":ident,"error":{"code":-32602,"message":"params must be an object"}}); continue
            if method=="initialize":
                negotiated=True
                result={"protocolVersion":"2025-06-18","capabilities":{"tools":{"listChanged":False},"prompts":{"listChanged":False}},"serverInfo":{"name":"anima-motion-lab","version":__version__},"instructions":INSTRUCTIONS if profile=='guided' else 'Use describe_capabilities first, or list_motion_recipes for the guided workflow. Viewer and MCP share --data directory.'}
            elif method=="ping": result={}
            elif not initialized:
                send({"jsonrpc":"2.0","id":ident,"error":{"code":-32002,"message":"Initialize the session first"}}); continue
            elif method=="tools/list": result={"tools":catalog}
            elif method=='prompts/list':result={'prompts':[{'name':'animation_director','description':'A short recipe-based animation workflow for tool-capable models.'}]}
            elif method=='prompts/get':
                if params.get('name')!='animation_director':
                    send({'jsonrpc':'2.0','id':ident,'error':{'code':-32602,'message':'Unknown prompt'}});continue
                result={'description':'Anima animation director','messages':[{'role':'user','content':{'type':'text','text':INSTRUCTIONS}}]}
            elif method=="tools/call":
                try:
                    if params.get('name') not in {t['name'] for t in catalog}:raise ValueError('Tool unavailable in this profile. Use one of: '+', '.join(t['name'] for t in catalog))
                    output=engine.call(params.get("name"),params.get("arguments",{}))
                    result={"content":[{"type":"text","text":json.dumps(output,allow_nan=False)}],"structuredContent":output,"isError":False}
                except (ValueError,TypeError,KeyError) as exc:
                    result={"content":[{"type":"text","text":str(exc)}],"isError":True}
            else:
                send({"jsonrpc":"2.0","id":ident,"error":{"code":-32601,"message":"Method not found"}}); continue
            send({"jsonrpc":"2.0","id":ident,"result":result})
        except json.JSONDecodeError:
            send({"jsonrpc":"2.0","id":None,"error":{"code":-32700,"message":"Parse error"}})
        except Exception as exc:
            print(f"MCP error: {exc}",file=sys.stderr)
            send({"jsonrpc":"2.0","id":ident,"error":{"code":-32603,"message":"Internal error; see stderr"}})
