import { Route, Routes, useNavigate } from "react-router";
import BackToIndex from "../../BackToIndex";

function Details() {
  const navigate = useNavigate();
  return (
    <section className="lofi-stack">
      <p className="lofi-small lofi-muted">Step 1 of 2</p>
      <h2>Create your account</h2>
      <label className="lofi-field">
        Name
        <input className="lofi-input" placeholder="Jane Doe" />
      </label>
      <label className="lofi-field">
        Email
        <input className="lofi-input" type="email" placeholder="jane@example.com" />
      </label>
      <div className="lofi-row">
        <button className="lofi-btn lofi-btn-primary" onClick={() => navigate("done")}>
          Continue
        </button>
        <button className="lofi-btn">Cancel</button>
      </div>
    </section>
  );
}

function Done() {
  const navigate = useNavigate();
  return (
    <section className="lofi-stack">
      <p className="lofi-small lofi-muted">Step 2 of 2</p>
      <div className="lofi-placeholder" style={{ height: 120 }}>
        Illustration
      </div>
      <h2>You're in</h2>
      <p>Check your inbox to confirm your email.</p>
      <div className="lofi-row">
        <button className="lofi-btn" onClick={() => navigate("..")}>
          Start over
        </button>
      </div>
    </section>
  );
}

export default function ExampleSignup() {
  return (
    <main className="lofi-page lofi-narrow">
      <BackToIndex />
      <Routes>
        <Route index element={<Details />} />
        <Route path="done" element={<Done />} />
      </Routes>
    </main>
  );
}
