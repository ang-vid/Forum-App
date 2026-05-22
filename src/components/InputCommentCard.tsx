import { useState } from "react";

type Props = {
  addComment: (text: string) => void;
};

function InputCommentCard({ addComment }: Props) {
  const [text, setText] = useState("");
  const maxCommentLength = 1000;

  const addPost = () => {
    if (!text.trim() || text.length > maxCommentLength) return;
    addComment(text.trim());
    setText("");
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (event.key === "Enter") {
      event.preventDefault();
      addPost();
    }
  };

  return (
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
  );
}

export default InputCommentCard;



