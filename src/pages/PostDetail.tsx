import { useLocation } from "react-router-dom";
import LinkifyText from "../components/LinkifyText..tsx";

export default function PostDetail() {
  // useSearchParams -> get id -> get comment from LS by id -> display comment
  const { text } = useLocation().state as { text: string };

  return (

    <div className="absolute inset-0 h-full w-full bg-[#FEFDFA] bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-size-[36px_36px]">
      <div className="m-10 w-full border-2 border-[#ebd1d194] bg-white p-3">
        <div className="flex items-center justify-between gap-3">
          <p className="flex-grow break-words text-base" style={{ minWidth: 0 }}>
            <LinkifyText text={text} />
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
// delete the bootstrap so we wouldnt have to do the important in every component
// get rid of bootstrap and the youtube player since we wont be using them