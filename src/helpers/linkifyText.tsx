

const urlRegex = /((?:https?:\/\/|www\.)[^\s]+)/gi;

export function linkifyText(text: string): React.ReactNode {
  const parts = text.split(urlRegex);

  return parts.map((part, index) => {
    if (!part) return null;

    const isUrl = part.match(urlRegex);
    if (isUrl) {
      const href = /^https?:\/\//i.test(part) ? part : `https://${part}`;
      return (
        // before for some reason using tailwind text-pink-500 underline wasnt working?????
        <a key={index} href={href} target="_blank" rel="noopener noreferrer" style={{ color: "#F1A9C1", textDecoration: "underline" }}>
          {part}
        </a>
      );
    }

    return <span key={index}>{part}</span>;
  });
}
