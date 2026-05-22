import { useLocation } from "react-router-dom";
import { linkifyText } from "../helpers/linkifyText";

export default function PostDetail() {
  // useSearchParams -> get id -> get comment from LS by id -> display comment
  const { text } = useLocation().state as { text: string };

  return (
    <div className="absolute inset-0 h-full w-full bg-[#FEFDFA] bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-size-[36px_36px]">
      <div className="card w-100 m-10 p-3">
        <div className="card-body d-flex align-items-center justify-content-between gap-3">
          <p className="card-text flex-grow-1 fontsize: 16px;text-break minWidth: 0,overflowWrap: 'break-word'" style={{ minWidth: 0 }}>
            {linkifyText(text)}
          </p>
        </div>
      </div>
    </div>
  );
}


// create component LinfiedText -> props text: string;
// in the component
// map - split by space
// const segments = mapToSegments(text) -> [{ type: "text", content: "some text" }, { type: "link", content: "http://example.com" }, { type: "ytLink", content: "http://example.com" }]
// create REGEX for youtube link -> youtube.com, youtu.be, m.youtube.com
// segments.map((segment) => )
// YoutubeEmbed -> contains iframe logic, props -> video id