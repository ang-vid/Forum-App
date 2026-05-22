import { useState } from "react";
import CommentCard from "./CommentCard";
import { setComments } from "../helpers/setComments";

// split into 2 components InputCommentCard and CommentListCard and move state to parent component

function InputCommentCard() {
  const [text, setText] = useState("");
  const maxCommentLength = 1000;

  const { comments, addComment, deleteComment } = setComments();

  const addPost = () => {
    addComment(text);
    setText("");
  };

  const handleDelete = (id: number) => {
    deleteComment(id);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (event.key === "Enter") {
        event.preventDefault();
        addPost();
    }
    }

  
  return (
    <div className="absolute inset-0 h-full w-full bg-[#FEFDFA] bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-size-[36px_36px]">
    <div className="d-flex flex-column align-items-center gap-3  mt-10">
      <div className="card w-50 p-3">
        <button
          onClick={() => setText("")}
          type="button"
          disabled={!text.trim()}
          className="btn place-self-end mb-2 px-2"
        >
          clear
        </button>
        <textarea
          className="form-control"
          rows={3}
          placeholder="Tut tvij text: "
          value={text}
          onChange={(e) => setText(e.target.value)}
          onKeyDown={handleKeyDown}
          style={{ fontSize: 20 }}
        />
        
        <button
          onClick={addPost}
          type="button"
          disabled={!text.trim() || text.length > maxCommentLength}
          className="btn place-self-end mt-2 px-4"
        >
          POST
        </button>

        
      </div>

      <div className="w-50 d-flex flex-column gap-3">
        {comments.map((comment, index) => (
          <CommentCard key={index} id={index + 1} text={comment} onDelete={handleDelete} />
        ))}
      </div>
    </div>
    </div>
  );
  
}

export default InputCommentCard;



