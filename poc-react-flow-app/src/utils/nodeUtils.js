import { nodeConfigurations } from './nodeConfig';

export const addNode = (type, nodes, setNodes, setHistory) => {
  const nodeId = nodes.length + 1;
  const nodeConfig = nodeConfigurations[type] || nodeConfigurations.default;
  const newNode = {
    id: `${nodeId}`,
    type: nodeConfig.type,
    position: { x: Math.random() * 400, y: Math.random() * 400 },
    data: {
      ...nodeConfig.data,
      name: nodeConfig.data.name(nodeId),
      selected: false,
      onChange: (data) => {
        console.log('Node data Change:', nodeId);
      },
      onDelete: (nodeId) => {
        console.log('Node Deleted:', nodeId);
        deleteThisNode(nodeId, nodes, setNodes, setHistory);
      },
    },
  };
  updateNodes([...nodes, newNode], nodes, setNodes, setHistory);
};

export const updateNodes = (newNodes, nodes, setNodes, setHistory) => {
  setHistory((prevHistory) => [...prevHistory, nodes]);
  setNodes(newNodes);
};

export const undo = (history, setHistory, setNodes) => {
  if (history.length > 0) {
    const previousState = history[history.length - 1];
    setHistory(history.slice(0, -1));
    setNodes(previousState);
  }
};

export const deleteThisNode = (nodeId, nodes, setNodes, setHistory) => {
  const newNodes = nodes.filter((node) => node.id !== nodeId);
  updateNodes(newNodes, nodes, setNodes, setHistory);
};
