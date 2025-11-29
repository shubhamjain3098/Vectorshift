// draggableNode.js

export const DraggableNode = ({ type, label }) => {
  const onDragStart = (event, nodeType) => {
    const appData = { nodeType };
    event.dataTransfer.setData(
      "application/reactflow",
      JSON.stringify(appData)
    );
    event.dataTransfer.effectAllowed = "move";
  };

  return (
    <div
      onDragStart={(event) => onDragStart(event, type)}
      draggable
      style={{
        cursor: "grab",
        padding: "12px",
        background: "#1C2536",
        borderRadius: "8px",
        color: "white",
        fontWeight: "500",
        textAlign: "center",
        userSelect: "none",
        transition: "0.2s ease",
      }}
      onMouseDown={(e) => (e.currentTarget.style.opacity = "0.85")}
      onMouseUp={(e) => (e.currentTarget.style.opacity = "1")}
      onDragEnd={(e) => (e.currentTarget.style.opacity = "1")}
    >
      {label}
    </div>
  );
};
