// mathNode.js
import { useState, useMemo } from "react";
import { Handle, Position } from "reactflow";
import { BaseNode } from "./baseNode";

export const MathNode = ({ id }) => {
  const [a, setA] = useState("1");
  const [b, setB] = useState("2");

  const sum = useMemo(() => {
    const n1 = Number(a) || 0;
    const n2 = Number(b) || 0;
    return n1 + n2;
  }, [a, b]);

  return (
    <BaseNode label="Math A + B">
      {/* TWO INPUT HANDLES */}
      <Handle
        type="target"
        position={Position.Left}
        id={`${id}-a`}
        style={{ top: "35%" }}
      />
      <Handle
        type="target"
        position={Position.Left}
        id={`${id}-b`}
        style={{ top: "65%" }}
      />

      <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
        <div style={{ display: "flex", gap: 8 }}>
          <label style={{ fontSize: 12 }}>
            A:
            <input
              type="number"
              value={a}
              onChange={(e) => setA(e.target.value)}
              style={{ marginLeft: 4, width: 70 }}
            />
          </label>
          <label style={{ fontSize: 12 }}>
            B:
            <input
              type="number"
              value={b}
              onChange={(e) => setB(e.target.value)}
              style={{ marginLeft: 4, width: 70 }}
            />
          </label>
        </div>

        <div style={{ fontSize: 12 }}>
          Result: <strong>{sum}</strong>
        </div>
      </div>

      {/* RESULT HANDLE */}
      <Handle
        type="source"
        position={Position.Right}
        id={`${id}-result`}
        style={{ top: "50%" }}
      />
    </BaseNode>
  );
};
