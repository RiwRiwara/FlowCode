import React, { useState, useCallback, useEffect } from 'react';
import {
  Handle, Position, useNodeId, useKeyPress,
  useOnSelectionChange
} from 'reactflow';


function VariableBlock({ data }) {
  const nodeId = useNodeId();


  const [variable, setVariable] = useState({
    varName: data.name || '',
    varDataType: data.dataType || '',
    varValue: data.value || '',
  });

  useEffect(() => {
    setVariable({
      varName: data.name || '',
      varDataType: data.dataType || '',
      varValue: data.value || '',
    });
  }, [data]);

  const onChange = useCallback((evt) => {
    const { name, value } = evt.target;
    setVariable((prevVariable) => ({
      ...prevVariable,
      [name]: value,
    }));

    data.onChange({
      ...variable,
      [name]: value,
    });
  }, [data, variable]);

  return (
    <>
      <Handle type="target" position={Position.Top} />
      <div className="absolute top-0 right-0 align-middle items-center">
        <button
          onClick={() => data.onDelete(nodeId)}
          className="text-red-500 px-2 bg-red-100 rounded-full hover:bg-red-200 hover:text-red-600 font-bold text-sm duration-200 ease-in"
        >
          x
        </button>
      </div>
      <div className="rounded shadow flex flex-col bg-white p-1">
        <div className="text-sm bg-orange-50 p-2">
          {variable.varName || 'Variable Block'}
        </div>

        <div className="p-2 flex justify-between gap-2">
          <div>
            <select
              name="varDataType"
              value={variable.varDataType}
              onChange={onChange}
              className="p-2 border border-gray-300 rounded"
            >
              <option value="string">String</option>
              <option value="number">Number</option>
              <option value="boolean">Boolean</option>
            </select>
          </div>
          <div>
            <input
              type="text"
              name="varName"
              value={variable.varName}
              onChange={onChange}
              placeholder="Variable Name"
              className="p-2 border border-gray-300 rounded"
            />
          </div>
        </div>
      </div>
      <Handle type="source" position={Position.Bottom} />
    </>
  );
}

export default VariableBlock;
