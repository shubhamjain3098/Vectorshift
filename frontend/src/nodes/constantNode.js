// constantNode.js
import { useState } from "react";
import { Handle, Position } from "reactflow";
import { BaseNode } from "./baseNode";

export const ConstantNode = ({ id }) => {
  const [value, setValue] = useState("Hello world");

  return (
    <BaseNode label="Constant">
      <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
        <label style={{ fontSize: 12 }}>
          Value:
          <input
            type="text"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            style={{ marginLeft: 4, width: "100%" }}
          />
        </label>
      </div>

      {/* ONLY OUTPUT HANDLE */}
      <Handle
        type="source"
        position={Position.Right}
        id={`${id}-value`}
        style={{ top: "50%" }}
      />
    </BaseNode>
  );
};
