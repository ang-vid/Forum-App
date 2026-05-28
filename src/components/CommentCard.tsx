import { Link } from "react-router-dom";
import LinkifiedText from "./LinkifyText.";

type Props = {
	id: number;
	text: string;
	createdAt: string;
	onDelete?: (id: number) => void;
};

function CommentCard({ id, text, createdAt, onDelete }: Props) {
	return (
		<div className="relative mb-6 w-full">
			{/* avatar box */}
			<div className="absolute -left-20 -top-7 h-17 w-17 border-3 border-[#2B2727] bg-white flex items-center justify-center">
				<img
					src="src/assets/Icon.svg"
					alt="Logo"
					className="w-17 h-17 object-contain py-2 px-2"
				/>
			</div>

			{/* username tab */}
			<div className="absolute left-0 -top-7 bg-[#f6dce6] border-3 border-[#2B2727] px-3 text-[#2B2727]">
				<p className="text-3xl">RandomUser123</p>
			</div>

			{/* main comment box */}
			<div className="border-3 border-[#2B2727] bg-white px-6 pt-5 pb-3 mt-3 mb-4 shadow-[2px_2px_0_#2B2727]">
				<p className="leading-7 text-[#2B2727] whitespace-pre-wrap break-words">
					<LinkifiedText text={text} />
				</p>

				<div className="mt-3 flex items-center justify-between">
					<div className="flex gap-2">
						<button
							type="button"
							className="btn border-[#e895b3] text-[#e895b3] hover:bg-[#e895b3] hover:text-white py-2 px-2"
							onClick={() => onDelete?.(id)}
						>
							Delete
						</button>

						<Link
							to={`/post/${id}`}
							className="btn border-[#2B2727] text-[#2B2727] hover:bg-[#2B2727] hover:text-white py-2 px-2"
						>
							View
						</Link>
					</div>
					<p className="text-sm text-[#2B2727]/60">
						{new Date(createdAt).toLocaleString()}
					</p>
				</div>
			</div>
		</div>
	);
}

export default CommentCard;
