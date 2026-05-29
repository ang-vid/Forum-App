import InstagramEmbed from "./InstagramEmbed";
import TiktokEmbed from "./TiktokEmbed";
import YoutubeEmbed from "./YoutubeEmbed";

type Segment =
	| {
			type: "text";
			content: string;
	  }
	| {
			type: "link";
			content: string;
	  }
	| {
			type: "youtube";
			content: string;
	  }
	| {
			type: "tiktok";
			content: string;
	  }
	| {
			type: "instagram";
			content: string;
	  };

type Props = {
	text: string;
};

type SegmentType = Segment["type"];

export function getYoutubeVideoId(url: string) {
	if (url.includes("watch?v=")) {
		return url.split("watch?v=")[1].split("&")[0];
	}

	if (url.includes("youtu.be/")) {
		return url.split("youtu.be/")[1].split("?")[0];
	}

	return url;
}

export function getTiktokVideoId(url: string) {
	const parts = url.split("/video/");

	if (parts[1]) {
		return parts[1].split("?")[0];
	}

	return url;
}

export function getInstagramPostId(url: string) {
	const formats = ["/p/", "/reel/", "/reels/", "/tv/"];

	for (const format of formats) {
		if (url.includes(format)) {
			const parts = url.split(format);

			if (parts[1]) {
				return parts[1].split("/")[0];
			}
		}
	}

	return url;
}

export function getSegmentType(word: string): SegmentType {
	if (word.includes("instagram.com")) {
		const formats = ["/p/", "/reel/", "/reels/", "/tv/"];
		if (formats.some((f) => word.includes(f))) return "instagram";
		return word.startsWith("http://") || word.startsWith("https://") ? "link" : "instagram";
	}
	if (word.includes("tiktok.com")) {
		if (word.includes("/video/")) return "tiktok";
		return word.startsWith("http://") || word.startsWith("https://") ? "link" : "tiktok";
	}
	if (word.includes("youtube.com") || word.includes("youtu.be")) {
		if (word.includes("watch?v=") || (word.includes("youtu.be/") && word.split("youtu.be/")[1])) return "youtube";
		return word.startsWith("http://") || word.startsWith("https://") ? "link" : "youtube";
	}
	if (word.startsWith("http://") || word.startsWith("https://")) return "link";
	return "text";
}


export function mapToSegments(text: string): Segment[] {
	return text.split(" ").map((word) => ({
		type: getSegmentType(word),
		content: word,
	}));
}

export default function LinkifiedText({ text }: Props) {
	const segments = mapToSegments(text);

	const textAndLinks = segments.filter(
		(segment) =>
			segment.type !== "youtube" &&
			segment.type !== "tiktok" &&
			segment.type !== "instagram",
	);

	const embeds = segments.filter(
		(segment) => segment.type !== "text" && segment.type !== "link",
	);

	return (
		<div className="flex flex-col gap-3">
			<p>
				{textAndLinks.map((segment) => {
					if (segment.type === "link") {
						return (
							<a
								key={segment.content}
								href={segment.content}
								target="_blank"
								rel="noreferrer"
								className="text-[#F1A9C1] underline"
							>
								{segment.content}{" "}
							</a>
						);
					}

					return <span key={segment.content}>{segment.content} </span>;
				})}
			</p>

			{embeds.map((segment) => {
				if (segment.type === "instagram") {
					return (
						<InstagramEmbed
							key={segment.content}
							postId={getInstagramPostId(segment.content)}
						/>
					);
				}

				if (segment.type === "youtube") {
					return (
						<YoutubeEmbed
							key={segment.content}
							videoId={getYoutubeVideoId(segment.content)}
						/>
					);
				}

				if (segment.type === "tiktok") {
					return (
						<TiktokEmbed
							key={segment.content}
							videoId={getTiktokVideoId(segment.content)}
						/>
					);
				}

				return null;
			})}
		</div>
	);
}

/**
 * https://www.youtube.com/watch?v=dQw4w9WgXcQ
 * https://youtu.be/dQw4w9WgXcQ
 * https://www.youtube.com/watch?v=jNQXAC9IVRw&t=12s
 * https://www.youtube.com/watch?v=3JZ_D3ELwOQ&ab_channel=MarkRonsonVEVO
 *
 * https://www.instagram.com/p/CuE2WNQs6vH/
 * https://www.instagram.com/reel/C5q0QK8O8Yw/
 * https://www.instagram.com/reels/CuE2WNQs6vH/
 * https://www.instagram.com/tv/CXx1234abcD/
 *
 * https://www.tiktok.com/@scout2015/video/6718335390845095173
 * https://www.tiktok.com/@nba/video/7295454326111915306?lang=en
 * https://www.tiktok.com/@therock/video/6829267836783971589
 * https://vm.tiktok.com/ZGJxA1b2C/
 */
