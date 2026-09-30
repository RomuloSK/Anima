"""SQLite shared across the workbench and MCP processes; immutable clip snapshots."""
from pathlib import Path
import json
import sqlite3
import uuid

class Store:
    def __init__(self,directory):
        self.directory=Path(directory).resolve(); self.directory.mkdir(parents=True,exist_ok=True)
        self.path=self.directory/"anima.sqlite3"
        with self.connect() as db:
            db.execute("PRAGMA journal_mode=WAL")
            db.execute("CREATE TABLE IF NOT EXISTS objects (id TEXT PRIMARY KEY, kind TEXT NOT NULL, data TEXT NOT NULL, created TEXT DEFAULT CURRENT_TIMESTAMP)")
    def connect(self): return sqlite3.connect(self.path,timeout=20)
    def put(self,kind,data):
        ident=kind+"_"+uuid.uuid4().hex[:16]
        value=dict(data,id=ident)
        with self.connect() as db: db.execute("INSERT INTO objects (id,kind,data) VALUES (?,?,?)",(ident,kind,json.dumps(value,allow_nan=False,separators=(",",":"))))
        return value
    def get(self,ident,kind=None):
        with self.connect() as db: row=db.execute("SELECT kind,data FROM objects WHERE id=?",(ident,)).fetchone()
        if not row or (kind and row[0]!=kind): raise ValueError("Unknown "+(kind or "object")+": "+ident)
        return json.loads(row[1])
    def list(self,kind,limit=100):
        with self.connect() as db: rows=db.execute("SELECT data FROM objects WHERE kind=? ORDER BY created DESC,rowid DESC LIMIT ?",(kind,limit)).fetchall()
        return [json.loads(r[0]) for r in rows]
