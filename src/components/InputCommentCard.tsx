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
    <div className="w-1/2 border-2 border-[#ebd1d194] bg-white p-3">
      <button
        onClick={() => setText("")}
        type="button"
        disabled={!text.trim()}
        className="mb-2 ml-auto border-2 border-black px-2 py-1 disabled:opacity-50"
      >
        clear
      </button>
      <textarea
        className="w-full border-2 border-black opacity-50 p-2 outline-none"
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
        className="mt-2 ml-auto border-2 border-black px-4 py-1 disabled:opacity-50"
      >
        POST
      </button>
    </div>
  );
}

export default InputCommentCard;



