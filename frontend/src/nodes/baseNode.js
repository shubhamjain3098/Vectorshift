// baseNode.js
import { memo } from "react";

export const BaseNode = memo(({ label, children, style = {} }) => {
  return (
    <div
      style={{
        width: 220,
        padding: "10px",
        borderRadius: "10px",
        background: "#ffffff",
        border: "1.5px solid #d1d5db",
        boxShadow: "0 1px 4px rgba(0,0,0,0.08)",
        fontFamily: "Inter, sans-serif",
        fontSize: "13px",
        color: "#111827",
        ...style,
      }}
    >
      <div
        style={{
          fontWeight: "600",
          marginBottom: "6px",
          borderBottom: "1px solid #e5e7eb",
          paddingBottom: "4px",
        }}
      >
        {label}
      </div>

      {children}
    </div>
  );
});
