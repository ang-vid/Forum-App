import { useLocation } from "react-router-dom";
export default function PostDetail() {
  const { text } = useLocation().state as { text: string };

  return <h1>{text}</h1>;
}