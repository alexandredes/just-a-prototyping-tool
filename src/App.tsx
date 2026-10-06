import { Route, Routes } from "react-router";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import { prototypes } from "./prototypes";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Index />} />
      {prototypes.map(({ slug, Component }) => (
        <Route key={slug} path={`/p/${slug}/*`} element={<Component />} />
      ))}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
