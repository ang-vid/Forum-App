import { Link } from "react-router-dom";



function CommentCard({ id, text, onDelete }: { id: number; text: string; onDelete?: (id: number) => void }) {
  return (
    <div className="card w-100 mb-3">
      <div className="card-body d-flex align-items-center justify-content-between gap-3">

        <p className="card-text mb-0 flex-grow-1">{text}</p>
        <div className="btn-group">
          <button type="button" className="btn btn-outline-danger btn-sm" onClick={() => onDelete?.(id)}>
            Delete
          </button>
          <Link to={`/post/${id}`} state={{text}} className="btn btn-outline-secondary btn-sm py-3">
            View
          </Link>
        </div>

      </div>
    </div>
  );
}

export default CommentCard;
