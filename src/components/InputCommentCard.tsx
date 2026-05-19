import { useState } from "react";
import CommentCard from "./CommentCard";

function InputCommentCard() {
  const [text, setText] = useState("");
  const [comments, setComments] = useState<string[]>([]);

  const addPost = () => {
    if (!text.trim()) return;
    setComments((current) => [text.trim(), ...current]);
    setText("");
  };
    const handleKeyDown = (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (event.key === "Enter") {
        event.preventDefault();
        addPost();
    }
    }
  return (
    <div className="d-flex flex-column align-items-center gap-3">
      <div className="card w-50 p-3">
        <h4>Post a comment</h4>
        <textarea
          className="form-control"
          rows={3}
          placeholder="Tut tvij text: "
          value={text}
          onChange={(e) => setText(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        
        <button
          onClick={addPost}
          type="button"
          disabled={!text.trim()}
          className="btn btn-primary mt-3"
        >
          Post
        </button>

        <button
          onClick={() => setText("")}
          type="button"
          disabled={!text.trim()}
          className="btn btn-danger mt-3"
        >
          Clear
        </button>
      </div>

      <div className="w-50 d-flex flex-column gap-3">
        {comments.map((comment, index) => (
          <CommentCard key={index} id={index + 1} text={comment} />
        ))}
      </div>
    </div>
  );
}

export default InputCommentCard;



