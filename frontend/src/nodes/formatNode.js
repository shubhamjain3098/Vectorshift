// formatNode.js
import { useState } from "react";
import { Handle, Position } from "reactflow";
import { BaseNode } from "./baseNode";

export const FormatNode = ({ id }) => {
  const [template, setTemplate] = useState("Hello {{name}}, your id is {{id}}");

  const handleChange = (e) => setTemplate(e.target.value);

  // Small demo replacement so it feels "alive"
  const preview = template
    .replace(/{{\s*name\s*}}/g, "Shubham")
    .replace(/{{\s*id\s*}}/g, "123");

  return (
    <BaseNode label="Format" style={{ minWidth: 260 }}>
      {/* INPUT HANDLE – where text could come from */}
      <Handle
        type="target"
        position={Position.Left}
        id={`${id}-input`}
        style={{ top: "50%" }}
      />

      <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
        <label style={{ fontSize: 12 }}>
          Template:
          <textarea
            value={template}
            onChange={handleChange}
            style={{
              marginTop: 4,
              width: "100%",
              minHeight: 40,
              fontSize: 12,
              resize: "none",
            }}
          />
        </label>

        <div
          style={{
            fontSize: 12,
            padding: "6px 8px",
            background: "#f3f4f6",
            borderRadius: 6,
          }}
        >
          <strong>Preview: </strong>
          {preview}
        </div>
      </div>

      {/* OUTPUT HANDLE */}
      <Handle
        type="source"
        position={Position.Right}
        id={`${id}-output`}
        style={{ top: "50%" }}
      />
    </BaseNode>
  );
};
