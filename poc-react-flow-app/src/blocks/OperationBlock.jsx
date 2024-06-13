import React, { useState, useCallback } from 'react';
import { Handle, Position, useNodeId } from 'reactflow';
import DeleteButton from '../components/DeleteButton';

function OperationBlock({
  data,
  selected
}) {
  const nodeId = useNodeId();
  const [operation, setOperation] = useState(data.operation || '');

  const onOperationChange = useCallback((evt) => {
    const newOperation = evt.target.value;
    setOperation(newOperation);
    data.onChange({ ...data, operation: newOperation });
  }, [data]);

  return (
    <>
      <Handle
        id='a'
        type="target" position={Position.Top} className=' bg-sky-600' />
      <div className="rounded border border-gray-200 shadow-sm flex flex-col bg-white">
        <DeleteButton onDelete={data.onDelete} nodeId={nodeId} />

        <div className="text-sm  mb-2 p-2  bg-sky-100">
          {data.name || 'Operation Block'}
        </div>
        <div className="p-2 flex flex-col gap-2">
          <select
            name="operation"
            value={operation}
            onChange={onOperationChange}
            className="p-2 border border-gray-300 rounded text-base"
          >
            <option value="">Select Operation</option>
            <option value="add">Add</option>
            <option value="subtract">Subtract</option>
            <option value="multiply">Multiply</option>
            <option value="divide">Divide</option>
            <option value="and">AND</option>
            <option value="or">OR</option>
            <option value="not">NOT</option>
          </select>
        </div>
      </div>
      <Handle type="source" position={Position.Bottom}
        id='b'
      />
    </>
  );
}

export default OperationBlock;
