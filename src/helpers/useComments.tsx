import { useState, useEffect } from "react";

export type Comment = {
  text: string;
  createdAt: string;
};

export function useComments() {
  const [comments, setComments] = useState<Comment[]>(() => {
    const saved = localStorage.getItem("PostedComments");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("PostedComments", JSON.stringify(comments));
  }, [comments]);

  const addComment = (text: string) => {
    if (!text.trim()) return;

    setComments((current) => [
      {
        text: text.trim(),
        createdAt: new Date().toISOString(),
      },
      ...current,
    ]);
  };

  const deleteComment = (id: number) => {
    setComments((current) => current.filter((_, index) => index !== id - 1));
  };

  return { comments, addComment, deleteComment };
}