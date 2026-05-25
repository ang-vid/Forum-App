import { Link } from "react-router-dom";
import LinkifiedText from "./LinkifyText.";

type Props = {
  id: number;
  text: string;
  onDelete?: (id: number) => void;
};

function CommentCard({ id, text, onDelete }: Props) {
  return (
  <div className="mb-3 w-full border-2 border-[#ebd1d194] bg-white p-4">
    <div className="flex flex-col items-start gap-3">
      <p
        className="mb-2"
        style={{
          minWidth: 0,
          whiteSpace: "pre-wrap",
          wordBreak: "break-word",
          overflowWrap: "break-word",
        }}
      >
        <LinkifiedText text={text} />
      </p>

      <div className="mt-2 flex justify-start gap-2 w-full">
        <button
          type="button"
          className="btn border-2 border-red-500 px-3 py-1 text-sm text-red-500 hover:bg-red-500 hover:text-white"
          onClick={() => onDelete?.(id)}
        >
          Delete
        </button>

        <Link
          to={`/post/${id}`}
          state={{ text }}
          className="btn border-2 border-gray-500 px-3 py-1 text-sm text-gray-600 hover:bg-gray-500 hover:text-white"
        >
          View
        </Link>
      </div>
    </div>
  </div>
);
}

export default CommentCard;
