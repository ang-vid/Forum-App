type InstagramEmbedProps = {
	postId: string;
};

export default function InstagramEmbed({ postId }: InstagramEmbedProps) {
	return (
		<div className="w-full max-w-sm overflow-hidden rounded-lg">
			<iframe
				title="Instagram embed"
				src={`https://www.instagram.com/p/${postId}/embed`}
				className="h-[700px] w-full border-0"
				allowFullScreen
			/>
		</div>
	);
}
