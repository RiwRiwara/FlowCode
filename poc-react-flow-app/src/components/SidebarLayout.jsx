import React, { useState } from 'react';
import FlowCanvas from './FlowCanvas';
import LeftSide from './LeftSide';
import RightSide from './RightSide';
import { addNode, updateNodes, undo, deleteThisNode } from '../utils/nodeUtils';

const SidebarLayout = () => {
  const [nodes, setNodes] = useState([]);
  const [edges, setEdges] = useState([]);
  
  const [history, setHistory] = useState([]);
  const [selectedNode, setSelectedNode] = useState(null);

  const handleAddNode = (type) => addNode(type, nodes, setNodes, setHistory);
  const handleUpdateNodes = (newNodes) => updateNodes(newNodes, nodes, setNodes, setHistory);
  const handleUndo = () => undo(history, setHistory, setNodes);

  const onDataReceived = (data) => setSelectedNode(data);

  return (
    <div className="min-h-screen flex">
      {/* Left Sidebar */}
      <LeftSide
        addNode={handleAddNode}
        updateNodes={handleUpdateNodes}
        undo={handleUndo}
        nodes={nodes}
        edges={edges}
      />
      {/* Main Content */}
      <FlowCanvas
        nodes={nodes}
        setNodes={setNodes}
        edges={edges}
        setEdges={setEdges}
        onDataReceived={onDataReceived}
      />
      {/* Right Sidebar */}
      <RightSide
        selectedNode={selectedNode}
      />
    </div>
  );
};

export default SidebarLayout;
