import React, { useCallback } from 'react';
import ReactFlow, {
  ReactFlowProvider,
  MiniMap,
  Controls,
  Background,
  applyNodeChanges,
  applyEdgeChanges,
  addEdge,
} from 'reactflow';
import 'reactflow/dist/style.css';
import { nodeTypes } from '../utils/nodeConfig';

export default function FlowCanvas({
  nodes,
  setNodes,
  edges,
  setEdges,
  onDataReceived,
}) {
  const onNodesChange = useCallback(
    (changes) => setNodes((nds) => applyNodeChanges(changes, nds)),
    [setNodes]
  );
  const onEdgesChange = useCallback(
    (changes) => setEdges((eds) => applyEdgeChanges(changes, eds)),
    [setEdges]
  );
  const onConnect = useCallback(
    (connection) => setEdges((eds) => addEdge(connection, eds)),
    [setEdges]
  );
  const onClickNode = useCallback(
    (event, node) => {
      console.log('click node id', node.id);
      onDataReceived(node);
    },
    [onDataReceived]
  );

  return (
    <div className="flex-1 bg-gray-50 p-4">
      <div style={{ width: '100%', height: '100%' }}>
        <ReactFlowProvider>
          <ReactFlow
            nodes={nodes}
            edges={edges}
            onNodesChange={onNodesChange}
            onEdgesChange={onEdgesChange}
            onNodeClick={onClickNode}
            onConnect={onConnect}
            nodeTypes={nodeTypes}
            deleteKeyCode="Delete"
            fitView
          >
            <Controls />
            <MiniMap />
            <Background variant="dots" gap={12} size={1} />
          </ReactFlow>
        </ReactFlowProvider>
      </div>
    </div>
  );
}
