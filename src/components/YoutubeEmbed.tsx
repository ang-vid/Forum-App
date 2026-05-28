type YoutubeEmbedProps = {
	videoId: string;
};

export default function YoutubeEmbed({ videoId }: YoutubeEmbedProps) {
	return (
		<div className="w-full max-w-sm aspect-video overflow-hidden rounded-lg">
			<iframe
				className="h-full w-full border-0"
				src={`https://www.youtube.com/embed/${videoId}`}
				title="YouTube embed"
				allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
				allowFullScreen
				loading="lazy"
			/>
		</div>
	);
}
