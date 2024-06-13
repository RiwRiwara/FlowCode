from fastapi import FastAPI
from pydantic import BaseModel
from typing import List, Dict

app = FastAPI()

class Node(BaseModel):
    id: str
    data: Dict

class Edge(BaseModel):
    id: str
    source: str
    target: str

class FlowData(BaseModel):
    nodes: List[Node]
    edges: List[Edge]

@app.post("/flow")
def flow(data: FlowData):
    nodes = data.nodes
    edges = data.edges
    print("Nodes:", nodes)
    print("Edges:", edges)
    return {"nodes": nodes, "edges": edges}
