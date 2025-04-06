import { Routes, Route } from "react-router-dom";
import Layout from "./components/layouts";
import IndexPage from "./pages/";
import InternPage from "./pages/intern";
import ScholarPage from "./pages/scholar";
import NotFound from "./pages/errors/404";
import ServerError from "./pages/errors/500";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<IndexPage />} />
        <Route path="scholarships" element={<ScholarPage />} />
        <Route path="internships" element={<InternPage />} />
        <Route path="/server-error" element={<ServerError />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
