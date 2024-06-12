import React, { useState, useCallback } from 'react';
import { Handle, Position } from 'reactflow';

function OperationBlock({ data }) {
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
        type="target" position={Position.Top} className='left-4 bg-sky-600' />
      <Handle
        id='b'
        type="target" position={Position.Top} className='bg-green-800' />
      <div className="rounded shadow flex flex-col bg-white p-1">
        <div className="text-sm bg-blue-50 p-2 mb-2">Operation Block</div>
        <div className="p-2 flex flex-col gap-2">
          <select
            name="operation"
            value={operation}
            onChange={onOperationChange}
            className="p-2 border border-gray-300 rounded"
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
        id='c'
      />
    </>
  );
}

export default OperationBlock;
