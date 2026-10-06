import { Link } from "react-router";

/** Small fixed link every prototype renders so you can always get back to the index. */
export default function BackToIndex() {
  return (
    <Link to="/" className="lofi-back">
      ← Index
    </Link>
  );
}
