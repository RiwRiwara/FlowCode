import React, { useState, useCallback, useEffect } from 'react';
import {
  Handle, Position, useNodeId, useKeyPress,
  useOnSelectionChange
} from 'reactflow';
import DeleteButton from '../components/DeleteButton';


function VariableBlock({
  data,
  selected
}) {
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
      <div className={`text-orange-700 p-0 border shadow-sm rounded   ${selected ? 'border-sky-500' : 'border-gray-200'}`}>
        <DeleteButton onDelete={data.onDelete} nodeId={nodeId} />
        <div className="rounded  flex flex-col bg-white ">
          <div className="text-sm bg-orange-100 p-2 flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-5 inline-block mr-1 ">
              <path fillRule="evenodd" d="M19.253 2.292a.75.75 0 0 1 .955.461A28.123 28.123 0 0 1 21.75 12c0 3.266-.547 6.388-1.542 9.247a.75.75 0 1 1-1.416-.494c.94-2.7 1.458-5.654 1.458-8.753s-.519-6.054-1.458-8.754a.75.75 0 0 1 .461-.954Zm-14.227.013a.75.75 0 0 1 .414.976A23.183 23.183 0 0 0 3.75 12c0 3.085.6 6.027 1.69 8.718a.75.75 0 0 1-1.39.563c-1.161-2.867-1.8-6-1.8-9.281 0-3.28.639-6.414 1.8-9.281a.75.75 0 0 1 .976-.414Zm4.275 5.052a1.5 1.5 0 0 1 2.21.803l.716 2.148L13.6 8.246a2.438 2.438 0 0 1 2.978-.892l.213.09a.75.75 0 1 1-.584 1.381l-.214-.09a.937.937 0 0 0-1.145.343l-2.021 3.033 1.084 3.255 1.445-.89a.75.75 0 1 1 .786 1.278l-1.444.889a1.5 1.5 0 0 1-2.21-.803l-.716-2.148-1.374 2.062a2.437 2.437 0 0 1-2.978.892l-.213-.09a.75.75 0 0 1 .584-1.381l.214.09a.938.938 0 0 0 1.145-.344l2.021-3.032-1.084-3.255-1.445.89a.75.75 0 1 1-.786-1.278l1.444-.89Z" clipRule="evenodd" />
            </svg>
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
                type={
                  variable.varDataType === 'number'
                    ? 'number'
                    : 'text'
                }
                name="varValue"
                value={variable.varValue}
                onChange={onChange}
                placeholder="Variable Name"
                className="p-2 border border-gray-300 rounded"
              />
            </div>
          </div>
        </div>
      </div>
      <Handle type="source" position={Position.Bottom} />
    </>
  );
}

export default VariableBlock;
