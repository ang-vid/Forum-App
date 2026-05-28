import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home.tsx";
import PostDetail from "./pages/PostDetail.tsx";
import NotFound from "./pages/NotFound.tsx";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/post/:id" element={<PostDetail />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}