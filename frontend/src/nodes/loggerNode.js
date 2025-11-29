// loggerNode.js
import { useState } from "react";
import { Handle, Position } from "reactflow";
import { BaseNode } from "./baseNode";

export const LoggerNode = ({ id }) => {
  const [message, setMessage] = useState("Hello from Logger");

  const handleLog = () => {
    console.log(`[LoggerNode ${id}]`, message);
  };

  return (
    <BaseNode label="Logger">
      {/* INPUT HANDLE */}
      <Handle
        type="target"
        position={Position.Left}
        id={`${id}-in`}
        style={{ top: "50%" }}
      />

      <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
        <label style={{ fontSize: 12 }}>
          Message:
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            style={{ marginLeft: 4, width: "100%" }}
          />
        </label>

        <button
          type="button"
          onClick={handleLog}
          style={{
            marginTop: 4,
            padding: "4px 8px",
            fontSize: 12,
            borderRadius: 6,
            border: "1px solid #d1d5db",
            background: "#eff6ff",
            cursor: "pointer",
          }}
        >
          Log to console
        </button>
      </div>

      {/* OUTPUT HANDLE */}
      <Handle
        type="source"
        position={Position.Right}
        id={`${id}-out`}
        style={{ top: "50%" }}
      />
    </BaseNode>
  );
};
