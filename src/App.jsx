import { Routes, Route } from "react-router-dom";
import Layout from "./components/layouts";
import IndexPage from "./pages/";
import InternPage from "./pages/intern";
import ScholarPage from "./pages/scholar";
import NotFound from "./pages/errors/404";
import ServerError from "./pages/errors/500";
import ScholarshipDetailPage from "./pages/scholar/detail";
import InternshipDetailPage from "./pages/intern/detail";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<IndexPage />} />
        <Route path="scholarships" element={<ScholarPage />} />
        <Route path="/scholarships/:id" element={<ScholarshipDetailPage />} />
        <Route path="internships" element={<InternPage />} />
        <Route path="/internships/:id" element={<InternshipDetailPage />} />
        <Route path="/server-error" element={<ServerError />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
