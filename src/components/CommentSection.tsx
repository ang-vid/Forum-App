import CommentCard from "./CommentCard";
import InputCommentCard from "./InputCommentCard";
import { useComments } from "../helpers/useComments";
// pomenat
function CommentSection() {
  const { comments, addComment, deleteComment } = useComments();

  const handleDelete = (id: number) => {
    deleteComment(id);
  };

  return (
    <div className="absolute inset-0 h-full w-full bg-[#FEFDFA] bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-size-[36px_36px]">
    <div className="mt-10 flex flex-col items-center gap-3">
          <InputCommentCard addComment={addComment} />

        <div className="flex w-1/2 flex-col gap-3">
          {comments.map((comment, index) => (
            <CommentCard key={index} id={index + 1} text={comment} onDelete={handleDelete} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default CommentSection;
