import { useLocation } from "react-router-dom";
export default function PostDetail() {
  const { text } = useLocation().state as { text: string };

  return (
    <div className="card w-100 mb-3 px">
          <div className="card-body d-flex align-items-center justify-content-between gap-3">
    
            <p className="card-text mb-0 flex-grow-1">{text}</p>
    
          </div>
        </div>
  )
}