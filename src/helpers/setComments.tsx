import { useState, useEffect } from "react";


export function setComments() {
  const [comments, setComments] = useState<string[]>(() => {
    const saved = localStorage.getItem("PostedComments");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("PostedComments", JSON.stringify(comments));
  }, [comments]);

  const addComment = (text: string) => {
    if (!text.trim()) return;
    setComments((current) => [text.trim(), ...current]);
  };

  const deleteComment = (id: number) => {
    setComments((current) => current.filter((_, index) => index !== id - 1));
  };

  return {
    comments,
    addComment,
    deleteComment,
  };
}
