import { Link } from "react-router-dom";

type CommentCardProps = {
  id: number;
  text: string;
};

function CommentCard({ id, text }: CommentCardProps) {
  return (
    <div className="card w-100 mb-3">
      <div className="card-body d-flex align-items-center justify-content-between gap-3">

        <p className="card-text mb-0 flex-grow-1">{text}</p>
        <div className="btn-group" role="group" aria-label="Comment actions">
          <button type="button" className="btn btn-outline-danger btn-sm">
            Delete
          </button>
          <Link to={`/post/${id}`} state={{text}} className="btn btn-outline-secondary btn-sm">
            View
          </Link>
        </div>

      </div>
    </div>
  );
}

export default CommentCard;
