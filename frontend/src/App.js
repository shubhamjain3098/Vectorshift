import { PipelineToolbar } from "./toolbar";
import { PipelineUI } from "./ui";
import { SubmitButton } from "./submit";
import "./ui.css";

function App() {
  return (
    <div className="main-layout">
      {/* LEFT TOOLBOX */}
      <aside className="sidebar">
        <PipelineToolbar />
      </aside>

      {/* CANVAS + SUBMIT */}
      <section className="workspace">
        <div className="canvas-card">
          <PipelineUI />
        </div>

        <div className="submit-area">
          <SubmitButton />
        </div>
      </section>
    </div>
  );
}

export default App;
