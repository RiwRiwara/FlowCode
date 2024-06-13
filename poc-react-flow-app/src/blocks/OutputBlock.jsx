import React from 'react';
import { Handle, Position, NodeResizer, useNodeId, useNodes, useEdges } from 'reactflow';
import DeleteButton from '../components/DeleteButton';

function OutputBlock({
  data, selected
}) {
  const nodeId = useNodeId();
  const nodes = useNodes();
  const edges = useEdges();

  const getRelatedEdges = (nodeId) => {
    return edges.filter(edge => edge.source === nodeId || edge.target === nodeId);
  };

  const getRelatedNodes = (relatedEdges) => {
    const nodeIds = new Set();
    relatedEdges.forEach(edge => {
      nodeIds.add(edge.source);
      nodeIds.add(edge.target);
    });
    return nodes.filter(node => nodeIds.has(node.id));
  };

  const onRun = () => {
    const relatedEdges = getRelatedEdges(nodeId);
    const relatedNodes = getRelatedNodes(relatedEdges);

    console.log('Running Output Block : ', data);
    console.log('Related Nodes: ', relatedNodes);
    console.log('Related Edges: ', relatedEdges);
  };


  

  return (
    <>
      <NodeResizer isVisible={selected} minHeight={60} minWidth={200} />
      <Handle type="target" position={Position.Top} />
      <div className='bg-white rounded border border-gray-200 shadow-sm flex' style={{ minWidth: 200 }}>
        <aside className='flex justify-center items-center p-1'>
          <svg
            onClick={onRun}
            xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6 text-green-600 hover:scale-105 duration-300 ease-out cursor-pointer">
            <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm14.024-.983a1.125 1.125 0 0 1 0 1.966l-5.603 3.113A1.125 1.125 0 0 1 9 15.113V8.887c0-.857.921-1.4 1.671-.983l5.603 3.113Z" clipRule="evenodd" />
          </svg>
        </aside>
        <div className="flex flex-col flex-1">
          <DeleteButton onDelete={data.onDelete} nodeId={nodeId} />
          <div className="px-1 py-0.5 p-2 bg-sky-100 flex items-center text-sky-700">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-5 inline-block mr-1">
              <path d="M15.75 7.5c-1.376 0-2.739.057-4.086.169C10.124 7.797 9 9.103 9 10.609v4.285c0 1.507 1.128 2.814 2.67 2.94 1.243.102 2.5.157 3.768.165l2.782 2.781a.75.75 0 0 0 1.28-.53v-2.39l.33-.026c1.542-.125 2.67-1.433 2.67-2.94v-4.286c0-1.505-1.125-2.811-2.664-2.94A49.392 49.392 0 0 0 15.75 7.5Z" />
            </svg>
            {data.name || 'Operation Block'}
          </div>
          <div className='p-0.5'>
            <div>
              {data.output || '...'}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OutputBlock;
