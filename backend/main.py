# backend/main.py
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import List, Optional, Dict

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["https://vectorshift-ten.vercel.app/"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class Node(BaseModel):
    id: str
    type: Optional[str] = None
    position: Optional[dict] = None
    data: Optional[dict] = None

class Edge(BaseModel):
    source: str
    target: str
    sourceHandle: Optional[str] = None
    targetHandle: Optional[str] = None

class Pipeline(BaseModel):
    nodes: List[Node]
    edges: List[Edge]

@app.get("/")
def root():
    return {"Ping": "Pong"}

@app.post("/pipelines/parse")
def parse_pipeline(pipeline: Pipeline):
    # Basic counts
    num_nodes = len(pipeline.nodes)
    num_edges = len(pipeline.edges)

    # Build adjacency list for DAG check
    adj: Dict[str, List[str]] = {node.id: [] for node in pipeline.nodes}
    for edge in pipeline.edges:
        # ignore edges that reference missing nodes (defensive)
        if edge.source in adj:
            adj[edge.source].append(edge.target)

    # Detect cycles using DFS
    visited = set()
    rec_stack = set()
    has_cycle = False

    def dfs(node_id: str):
        nonlocal has_cycle
        if has_cycle:
            return
        visited.add(node_id)
        rec_stack.add(node_id)
        for nxt in adj.get(node_id, []):
            if nxt not in visited:
                dfs(nxt)
            elif nxt in rec_stack:
                has_cycle = True
                return
        rec_stack.remove(node_id)

    for nid in adj:
        if nid not in visited:
            dfs(nid)
        if has_cycle:
            break

    return {"num_nodes": num_nodes, "num_edges": num_edges, "is_dag": not has_cycle}
