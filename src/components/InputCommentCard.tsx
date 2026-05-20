import { useState , useEffect} from "react";
import CommentCard from "./CommentCard";


function InputCommentCard() {
  const [text, setText] = useState("");
  const [comments, setComments] = useState<string[]>([]);

  useEffect(() => {
    const saved = localStorage.getItem("PostedComments");
    if (saved) {
      setComments(JSON.parse(saved));
    }}, []);


  useEffect(() => {
    localStorage.setItem("PostedComments", JSON.stringify(comments));
  }, [comments]);

  const addPost = () => {
    if (!text.trim()) return;
    setComments((current) => [text.trim(), ...current]);
    setText("");
  };

  const handleDelete = (id: number) => {
    setComments((current) => current.filter((_, index) => index !== id - 1));
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
        <button
          onClick={() => setText("")}
          type="button"
          disabled={!text.trim()}
          className="btn place-self-end mb-2 text-sm text-gray-500 hover:text-gray-700"
        >
          Clear
        </button>
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
          className="btn place-self-end mt-2"
        >
          Post
        </button>

        
      </div>

      <div className="w-50 d-flex flex-column gap-3">
        {comments.map((comment, index) => (
          <CommentCard key={index} id={index + 1} text={comment} onDelete={handleDelete} />
        ))}
      </div>
    </div>
  );
}

export default InputCommentCard;



