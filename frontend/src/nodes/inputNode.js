import { useState } from "react";
import { Handle, Position } from "reactflow";
import { BaseNode } from "./baseNode";
import { handleStyle, inputStyle, selectStyle } from "./nodeStyles";

export const InputNode = ({ id, data }) => {
  const [currName, setCurrName] = useState(
    data?.inputName || id.replace("customInput-", "input_")
  );
  const [inputType, setInputType] = useState(data.inputType || "Text");

  return (
    <BaseNode label="Input">
      <label>
        Name:
        <input
          value={currName}
          onChange={(e) => setCurrName(e.target.value)}
          style={inputStyle}
        />
      </label>

      <label>
        Type:
        <select
          value={inputType}
          onChange={(e) => setInputType(e.target.value)}
          style={selectStyle}
        >
          <option value="Text">Text</option>
          <option value="File">File</option>
        </select>
      </label>

      <Handle
        type="source"
        position={Position.Right}
        id={`${id}-value`}
        style={{ ...handleStyle, right: -6, top: "50%" }}
      />
    </BaseNode>
  );
};
