import { Handle, Position } from "reactflow";
import { BaseNode } from "./baseNode";
import { handleStyle } from "./nodeStyles";

export const LLMNode = ({ id }) => {
  return (
    <BaseNode label="LLM">
      <Handle
        type="target"
        position={Position.Left}
        id={`${id}-system`}
        style={{ ...handleStyle, top: "35%", left: -6 }}
      />
      <Handle
        type="target"
        position={Position.Left}
        id={`${id}-prompt`}
        style={{ ...handleStyle, top: "65%", left: -6 }}
      />

      <div style={{ fontSize: "12px", color: "#4b5563" }}>
        This is a language model.
      </div>

      <Handle
        type="source"
        position={Position.Right}
        id={`${id}-response`}
        style={{ ...handleStyle, right: -6, top: "50%" }}
      />
    </BaseNode>
  );
};
