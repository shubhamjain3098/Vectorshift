import { useState, useEffect, useRef } from "react";
import { Handle, Position } from "reactflow";
import { BaseNode } from "./baseNode";
import { handleStyle } from "./nodeStyles";
import { useStore } from "../store";

export const TextNode = ({ id, data }) => {
  const updateNodeField = useStore((state) => state.updateNodeField);

  const [currText, setCurrText] = useState(data?.text || "{{input}}");
  const [variables, setVariables] = useState([]);
  const [size, setSize] = useState({ width: 220, height: 100 });
  const textareaRef = useRef(null);

  const extractVariables = (text) => {
    const regex = /{{\s*([a-zA-Z_$][a-zA-Z0-9_$]*)\s*}}/g;
    let match;
    const found = [];
    while ((match = regex.exec(text)) !== null) found.push(match[1]);

    setVariables(found);
    updateNodeField(id, "variables", found); // update the store
  };

  const autoResize = () => {
    if (!textareaRef.current) return;
    const el = textareaRef.current;
    el.style.height = "auto";
    setSize((s) => ({ ...s, height: el.scrollHeight + 40 }));
  };

  useEffect(() => {
    extractVariables(currText);
    autoResize();
  }, []);

  return (
    <BaseNode label="Text" style={{ width: size.width, height: size.height }}>
      <textarea
        ref={textareaRef}
        value={currText}
        onChange={(e) => {
          setCurrText(e.target.value);
          updateNodeField(id, "text", e.target.value);
          extractVariables(e.target.value);
          autoResize();
        }}
        style={{
          width: "100%",
          minHeight: "40px",
          border: "1px solid #9ca3af",
          borderRadius: "6px",
          padding: "6px",
          fontSize: "13px",
        }}
      />

      <Handle
        type="source"
        position={Position.Right}
        id={`${id}-output`}
        style={{ ...handleStyle, right: -6, top: "50%" }}
      />

      {variables.map((v, i) => (
        <Handle
          key={v}
          type="target"
          position={Position.Left}
          id={`${id}-${v}`}
          style={{
            ...handleStyle,
            left: -6,
            top: `${35 + i * 20}px`,
          }}
        />
      ))}
    </BaseNode>
  );
};
