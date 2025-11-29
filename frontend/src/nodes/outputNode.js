import { useState } from "react";
import { Handle, Position } from "reactflow";
import { BaseNode } from "./baseNode";
import { handleStyle, inputStyle, selectStyle } from "./nodeStyles";

export const OutputNode = ({ id, data }) => {
  const [currName, setCurrName] = useState(
    data?.outputName || id.replace("customOutput-", "output_")
  );
  const [outputType, setOutputType] = useState(data.outputType || "Text");

  return (
    <BaseNode label="Output">
      <Handle
        type="target"
        position={Position.Left}
        id={`${id}-value`}
        style={{ ...handleStyle, left: -6, top: "50%" }}
      />

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
          value={outputType}
          onChange={(e) => setOutputType(e.target.value)}
          style={selectStyle}
        >
          <option value="Text">Text</option>
          <option value="File">Image</option>
        </select>
      </label>
    </BaseNode>
  );
};
