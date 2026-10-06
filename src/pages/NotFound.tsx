import { Link } from "react-router";

export default function NotFound() {
  return (
    <main className="lofi-page lofi-stack">
      <h1>Not found</h1>
      <Link to="/">← Back to index</Link>
    </main>
  );
}
