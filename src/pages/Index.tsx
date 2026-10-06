import { Link } from "react-router";
import { prototypes } from "../prototypes";

export default function Index() {
  return (
    <main className="lofi-page">
      <header className="lofi-stack">
        <h1>Just a prototyping tool</h1>
        <p className="lofi-muted">Lo-fi, black-and-white prototypes. {prototypes.length} so far.</p>
      </header>

      {prototypes.length === 0 ? (
        <p className="lofi-box">No prototypes yet.</p>
      ) : (
        <ul className="lofi-list">
          {prototypes.map((p) => (
            <li key={p.slug}>
              <Link to={`/p/${p.slug}`} className="lofi-list-item">
                <span className="lofi-list-title">{p.title}</span>
                <span className="lofi-muted">{p.description}</span>
                <span className="lofi-muted lofi-small">{p.added}</span>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </main>
  );
}
