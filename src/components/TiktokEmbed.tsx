type TiktokEmbedProps = {
  videoId: string;
};

export default function TiktokEmbed({
  videoId,
}: TiktokEmbedProps) {
  return (
    <div className="w-full max-w-sm overflow-hidden rounded-lg">
      <iframe
        src={`https://www.tiktok.com/embed/v2/${videoId}`}
        className="h-[740px] w-full border-0"
        allowFullScreen
      />
    </div>
  );
}
