import { useState } from "react";
import BackToIndex from "../../BackToIndex";
import "./SpinningPizza.css";

export default function SpinningPizza() {
  const [spinRun, setSpinRun] = useState(0);
  const [isSpinning, setIsSpinning] = useState(false);

  const handleSpin = () => {
    setSpinRun((value) => value + 1);
    setIsSpinning(true);
  };

  return (
    <main className="lofi-page lofi-narrow">
      <BackToIndex />
      <section className="lofi-box lofi-stack">
        <h2>Pizza spinner</h2>
        <p className="lofi-muted">
          Press the button to send a pizza around a circular track.
        </p>

        <div className="pizza-stage" aria-live="polite">
          <div className="pizza-ring" aria-hidden />
          <div
            key={spinRun}
            className={`pizza-orbit${isSpinning ? " pizza-orbit-spin" : ""}`}
            onAnimationEnd={() => setIsSpinning(false)}
          >
            <div className="pizza-icon" role="img" aria-label="Lo-fi pizza">
              <span className="pizza-cut pizza-cut-a" />
              <span className="pizza-cut pizza-cut-b" />
              <span className="pizza-cut pizza-cut-c" />
              <span className="pizza-topping pizza-topping-a" />
              <span className="pizza-topping pizza-topping-b" />
              <span className="pizza-topping pizza-topping-c" />
            </div>
          </div>
        </div>

        <div className="lofi-row">
          <button type="button" className="lofi-btn lofi-btn-primary" onClick={handleSpin}>
            Spin pizza
          </button>
        </div>
        <p className="lofi-small lofi-muted">
          {isSpinning ? "Spinning..." : "Ready for another spin."}
        </p>
      </section>
    </main>
  );
}
