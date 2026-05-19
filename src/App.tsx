import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home.tsx";
import PostDetail from "./pages/PostDetail.tsx";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/post/:id" element={<PostDetail />} />
    </Routes>
  );
}