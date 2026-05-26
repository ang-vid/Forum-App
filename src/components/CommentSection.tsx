import CommentCard from "./CommentCard";
import InputCommentCard from "./InputCommentCard";
import { useComments } from "../helpers/useComments";

function CommentSection() {
  const { comments, addComment, deleteComment } = useComments();

  const handleDelete = (id: number) => {
    deleteComment(id);
  };

  return (
<div className="min-h-screen w-full" >
    <div className="w-full flex justify-center pt-6 pb-0">
      <h1
        className="flex items-center gap-4 text-9xl text-[#2B2727] translate-x-3"
        style={{ fontFamily: "Pixel" }}
      >
        <span>Anon</span>

        <img
          src="src/assets/BLogo.svg"
          alt="Logo"
          className="w-36 h-36 object-contain"
        />

        <span>Forum</span>
      </h1>
  </div>
        <div className="mt-10 flex flex-col items-center gap-3">
          <InputCommentCard addComment={addComment} />

        <div className="flex w-1/2 flex-col gap-3">
          {comments.map((comment, index) => (
            <CommentCard
              key={index}
              id={index + 1}
              text={comment.text}
              createdAt={comment.createdAt}
              onDelete={handleDelete}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default CommentSection;
