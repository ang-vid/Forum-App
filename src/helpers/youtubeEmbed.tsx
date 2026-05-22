const youtubeRegex =/^(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/watch\?v=([a-zA-Z0-9_]+)|youtu\.be\/([a-zA-Z\d_]+))(?:&.*)?$/;

export function isYoutubeLink(link: string): boolean {
  return youtubeRegex.test(link);
}

