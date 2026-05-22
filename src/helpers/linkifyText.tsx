import { isYoutubeLink } from "../helpers/youtubeEmbed";

const urlRegex = /((?:https?:\/\/|www\.)[^\s]+)/gi;

export function linkifyText(text: string): React.ReactNode {
  const parts = text.split(urlRegex);

  return parts.map((part, index) => {
    if (!part) return null;

    const isUrl = part.match(urlRegex);
    if (isUrl) {
      const href = /^https?:\/\//i.test(part) ? part : `https://${part}`;
      if (isYoutubeLink(href)) {
        console.log("YouTube link detected:", href);
      }
      return (
        <a key={index} href={href} target="_blank" rel="noopener noreferrer" className="!text-red-200 !underline">
          {part}
        </a>
      );
    }

    return <span key={index}>{part}</span>;
  });
}
