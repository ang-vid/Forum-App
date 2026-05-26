import { useLocation } from "react-router-dom";
import LinkifyText from "../components/LinkifyText..tsx";

export default function PostDetail() {
  // useSearchParams -> get id -> get comment from LS by id -> display comment
  const { text } = useLocation().state as { text: string };

  return (
  <div className="min-h-screen w-full bg-[#FEFDFA] bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-size-[36px_36px] p-6">
    
    <div className="mx-auto w-full max-w-5xl border-3 border-[#2B2727] bg-white p-8 shadow-[4px_4px_0_#2B2727]">
      <p
        className="break-words text-2xl leading-10 text-[#2B2727]"
        style={{
          whiteSpace: "pre-wrap",
          wordBreak: "break-word",
          overflowWrap: "break-word",
        }}
      >
        <LinkifyText text={text} />
      </p>

    </div>
  </div>
);
}

