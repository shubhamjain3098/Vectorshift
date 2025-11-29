// conditionalNode.js
import { useState } from "react";
import { Handle, Position } from "reactflow";
import { BaseNode } from "./baseNode";

export const ConditionalNode = ({ id }) => {
  const [value, setValue] = useState("5");

  const numeric = Number(value) || 0;
  const isGreater = numeric > 10;

  return (
    <BaseNode label="Condition (> 10)">
      {/* INPUT HANDLE */}
      <Handle
        type="target"
        position={Position.Left}
        id={`${id}-input`}
        style={{ top: "50%" }}
      />

      <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
        <label style={{ fontSize: 12 }}>
          Value:
          <input
            type="number"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            style={{ marginLeft: 4, width: 80 }}
          />
        </label>

        <div style={{ fontSize: 12 }}>
          Result:{" "}
          <strong style={{ color: isGreater ? "#16a34a" : "#dc2626" }}>
            {isGreater ? "YES" : "NO"}
          </strong>
        </div>
      </div>

      {/* YES / NO OUTPUTS */}
      <Handle
        type="source"
        position={Position.Right}
        id={`${id}-yes`}
        style={{ top: "40%" }}
      />
      <Handle
        type="source"
        position={Position.Right}
        id={`${id}-no`}
        style={{ top: "60%" }}
      />
    </BaseNode>
  );
};
