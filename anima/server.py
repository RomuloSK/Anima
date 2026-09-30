"""Local workbench and JSON tool API. Not a public multi-user hosting server."""
from http.server import BaseHTTPRequestHandler,ThreadingHTTPServer
from pathlib import Path
from urllib.parse import urlparse,unquote,parse_qs
import json
import mimetypes
import sys
from .tools import TOOLS
from .exports import export

WEB=Path(__file__).parent/"web"

def make_server(engine,port=8765):
    class Handler(BaseHTTPRequestHandler):
        def log_message(self,format,*args): pass
        def reply(self,data,status=200,kind="application/json",filename=None):
            if kind=="application/json": data=json.dumps(data,allow_nan=False,separators=(",",":")).encode()
            elif isinstance(data,str): data=data.encode()
            self.send_response(status)
            self.send_header("Content-Type",kind)
            self.send_header("Content-Length",str(len(data)))
            self.send_header("X-Content-Type-Options","nosniff")
            self.send_header("Cache-Control","no-store")
            self.send_header("Content-Security-Policy","default-src 'self'; script-src 'self'; style-src 'self' 'unsafe-inline'; img-src 'self' data:; connect-src 'self'; object-src 'none'; base-uri 'self'; frame-ancestors 'none'")
            if filename: self.send_header("Content-Disposition",f'attachment; filename="{filename}"')
            self.end_headers(); self.wfile.write(data)
        def same_host(self):
            expected={f"127.0.0.1:{self.server.server_port}",f"localhost:{self.server.server_port}"}
            if self.headers.get("Host","") not in expected: return False
            origin=self.headers.get("Origin")
            return origin is None or origin in {"http://"+h for h in expected}
        def do_GET(self):
            if not self.same_host(): return self.reply({"error":"Local same-origin access required"},403)
            path=unquote(urlparse(self.path).path)
            try:
                if path=="/api/status": return self.reply(engine.call("describe_capabilities",{}))
                if path=="/api/tools": return self.reply({"tools":TOOLS})
                if path=="/api/mcp-config":
                    profile=parse_qs(urlparse(self.path).query).get('profile',['all'])[0]
                    if profile not in ('all','guided'):raise ValueError('Unknown API profile')
                    return self.reply({"mcpServers":{"anima":{"command":sys.executable,"args":["-m","anima","mcp","--profile",profile,"--data",str(engine.store.directory)],"env":{"PYTHONPATH":str(Path(__file__).parent.parent)}}}})
                if path=="/api/assets": return self.reply(engine.call("list_assets",{}))
                if path.startswith("/api/clips/"):
                    return self.reply(engine.store.get(path.rsplit("/",1)[-1],"clip"))
                if path.startswith("/api/export/"):
                    ident,fmt=path.rsplit("/",1)[-1].rsplit(".",1)
                    clip=engine.store.get(ident,"clip")
                    if fmt=='mp4':
                        from .quality import assert_releasable
                        assert_releasable(clip)
                        movie=engine.store.directory/'exports'/(clip['id']+'.mp4')
                        if not movie.is_file():raise ValueError('Use finish_animation to render the MP4 first')
                        return self.reply(movie.read_bytes(),kind='video/mp4',filename=movie.name)
                    return self.reply(export(clip,fmt),kind="application/octet-stream",filename=ident+"."+fmt)
                local=(WEB/("index.html" if path=="/" else path.lstrip("/"))).resolve()
                if not local.is_relative_to(WEB.resolve()) or not local.is_file(): return self.reply({"error":"Not found"},404)
                mime=mimetypes.guess_type(local.name)[0] or "application/octet-stream"
                if local.suffix==".js": mime="text/javascript"
                return self.reply(local.read_bytes(),kind=mime)
            except ValueError as exc: return self.reply({"error":str(exc)},404)
            except Exception as exc:
                print(f"HTTP error: {exc}",file=sys.stderr)
                return self.reply({"error":"Server error; check terminal output"},500)
        def do_POST(self):
            if not self.same_host(): return self.reply({"error":"Local same-origin access required"},403)
            if self.path!="/api/call": return self.reply({"error":"Not found"},404)
            if self.headers.get("Content-Type","").split(";")[0]!="application/json": return self.reply({"error":"Use application/json"},415)
            try:
                size=int(self.headers.get("Content-Length","0"))
                if size<=0 or size>2_000_000: return self.reply({"error":"Invalid body size"},413)
                payload=json.loads(self.rfile.read(size))
                if not isinstance(payload,dict): raise ValueError("Request must be an object")
                return self.reply(engine.call(payload.get("name"),payload.get("arguments",{})))
            except (ValueError,TypeError,KeyError) as exc: return self.reply({"error":str(exc)},400)
            except Exception as exc:
                print(f"HTTP error: {exc}",file=sys.stderr)
                return self.reply({"error":"Server error; check terminal output"},500)
    return ThreadingHTTPServer(("127.0.0.1",port),Handler)

def seed(engine):
    if not engine.store.list("character"):
        for species,action in (("human","walk"),("dog","trot")):
            rig=engine.call("create_character",{"species":species})
            engine.call("generate_motion",{"character_id":rig["id"],"action":action,"duration":4})

def serve(engine,port=8765):
    seed(engine); server=make_server(engine,port)
    print(f"Anima is running at http://127.0.0.1:{server.server_port}",flush=True)
    print("Press Ctrl+C to stop. Data stays in "+str(engine.store.directory),flush=True)
    try: server.serve_forever()
    except KeyboardInterrupt: pass
    finally: server.server_close()
