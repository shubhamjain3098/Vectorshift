// toolbar.js

import { DraggableNode } from "./draggableNode";

export const PipelineToolbar = () => {
  return (
    <div
      style={{
        width: "220px",
        background: "#F7F9FC",
        padding: "16px",
        borderRight: "1px solid #E5E7EB",
        boxShadow: "2px 0 4px rgba(0, 0, 0, 0.06)",
        display: "flex",
        flexDirection: "column",
        gap: "12px",
        height: "100vh",
      }}
    >
      <h3
        style={{
          marginBottom: "8px",
          fontSize: "18px",
          color: "#1C2536",
          fontWeight: "600",
        }}
      >
        Toolbox
      </h3>
      <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
        <DraggableNode type="customInput" label="Input" />
        <DraggableNode type="llm" label="LLM" />
        <DraggableNode type="customOutput" label="Output" />
        <DraggableNode type="text" label="Text" />

        {/* NEW NODES */}
        <DraggableNode type="format" label="Format" />
        <DraggableNode type="math" label="Math A+B" />
        <DraggableNode type="condition" label="Condition" />
        <DraggableNode type="logger" label="Logger" />
        <DraggableNode type="constant" label="Constant" />
      </div>
    </div>
  );
};
