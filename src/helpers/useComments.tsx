import { useState, useEffect } from "react";

// izmenit na useComments
export function useComments() {
  const [comments, useComments] = useState<string[]>(() => {
    const saved = localStorage.getItem("PostedComments");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("PostedComments", JSON.stringify(comments));
  }, [comments]);

  const addComment = (text: string) => {
    if (!text.trim()) return;
    useComments((current) => [text.trim(), ...current]);
  };

  const deleteComment = (id: number) => {
    useComments((current) => current.filter((_, index) => index !== id - 1));
  };

  return {
    comments,
    addComment,
    deleteComment,
  };
}
