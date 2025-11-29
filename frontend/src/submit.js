// submit.js
import { useCallback, useState } from "react";
import { useStore } from "./store";

const API_BASE = process.env.REACT_APP_API_BASE_URL;

export const SubmitButton = () => {
  const nodes = useStore((s) => s.nodes);
  const edges = useStore((s) => s.edges);

  const [loading, setLoading] = useState(false);
  const [responseMsg, setResponseMsg] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  // ✅ log safely:
  console.log("API_BASE =", API_BASE);

  const handleSubmit = useCallback(async () => {
    setLoading(true);
    setErrorMsg(null);
    setResponseMsg(null);

    // ✅ safety guard
    if (!API_BASE) {
      setErrorMsg("Backend URL not loaded. Check .env file.");
      setLoading(false);
      return;
    }

    try {
      const payload = { nodes, edges };

      const res = await fetch(`${API_BASE}/pipelines/parse`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        throw new Error(`HTTP ${res.status}`);
      }

      const data = await res.json();

      setResponseMsg(
        `Nodes: ${data.num_nodes} | Edges: ${data.num_edges} | DAG: ${
          data.is_dag ? "YES" : "NO"
        }`
      );
    } catch (err) {
      console.error("Submit error:", err);
      setErrorMsg("Failed to submit pipeline. Check backend or console.");
    }

    setLoading(false);
  }, [nodes, edges]);

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      {/* SUCCESS */}
      {responseMsg && (
        <div
          style={{
            padding: "10px",
            background: "#d4edda",
            color: "#155724",
            borderRadius: "6px",
            marginBottom: "12px",
            width: "320px",
            display: "inline-block",
          }}
        >
          {responseMsg}
        </div>
      )}

      {/* ERROR */}
      {errorMsg && (
        <div
          style={{
            padding: "10px",
            background: "#f8d7da",
            color: "#721c24",
            borderRadius: "6px",
            marginBottom: "12px",
            width: "320px",
            display: "inline-block",
          }}
        >
          {errorMsg}
        </div>
      )}

      {/* SUBMIT BUTTON */}
      <button
        onClick={handleSubmit}
        disabled={loading}
        style={{
          padding: "10px 22px",
          fontSize: "16px",
          cursor: loading ? "not-allowed" : "pointer",
          opacity: loading ? 0.6 : 1,
        }}
      >
        {loading ? "Submitting..." : "Submit"}
      </button>
    </div>
  );
};
