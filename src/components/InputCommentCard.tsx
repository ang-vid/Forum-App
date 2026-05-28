import { useState } from "react";

type Props = {
	addComment: (text: string) => void;
};

function InputCommentCard({ addComment }: Props) {
	const [text, setText] = useState("");
	const maxCommentLength = 1000;

	const addPost = () => {
		if (!text.trim() || text.length > maxCommentLength) return;
		addComment(text.trim());
		setText("");
	};

	const handleKeyDown = (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
		if (event.key === "Enter") {
			event.preventDefault();
			addPost();
		}
	};

	return (
		<div className="w-1/2 mb-12 border-3 border-[#2B2727] bg-white p-1 shadow-[3px_3px_0_#2B2727]">
			{/* username tab */}
			<div className="mb-2 flex items-center gap-3 bg-[#FAE2EA] px-2 py-1">
				{/* the little lines around the username */}
				<div className="flex-1 space-y-[3px]">
					{[...Array(6)].map((_, i) => (
						// biome-ignore lint: placeholder-use
						<div key={i} className="h-[2px] w-full bg-[#2B2727]" />
					))}
				</div>

				<p className="text-3xl text-[#2B2727]">RandomUser123</p>

				{/* the little lines around the username */}
				<div className="flex-1 space-y-[3px]">
					{[...Array(6)].map((_, i) => (
						// biome-ignore lint: placeholder-use
						<div key={i} className="h-[2px] w-full bg-[#2B2727]" />
					))}
				</div>

				<button
					onClick={() => setText("")}
					type="button"
					disabled={!text.trim()}
					className="border-2 border-[#2B2727] bg-white px-1 py-0 text-xl disabled:opacity-50"
				>
					clear
				</button>
			</div>

			{/* icon box */}
			<div className="flex gap-3">
				<div className="flex h-20 w-20 shrink-0 items-center justify-center border-3 border-[#2B2727]">
					<img
						src="src/assets/Icon.svg"
						alt="Logo"
						className="w-20 h-20 object-contain py-2 px-2"
					/>
				</div>
				{/* main text area */}
				<textarea
					className="min-h-32 flex-1 resize-none border-none bg-transparent p-1 text-2xl outline-none placeholder:text-[#2B2727]"
					placeholder="Write your post..."
					value={text}
					onChange={(e) => setText(e.target.value)}
					onKeyDown={handleKeyDown}
				/>
			</div>

			<div className="mt-2 flex justify-end">
				<button
					onClick={addPost}
					type="button"
					disabled={!text.trim() || text.length > maxCommentLength}
					className="border-3 border-[#2B2727] bg-white px-3 py-0 text-2xl  disabled:opacity-50"
				>
					SEND
				</button>
			</div>
		</div>
	);
}

export default InputCommentCard;
