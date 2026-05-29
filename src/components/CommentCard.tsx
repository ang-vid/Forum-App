import { Link } from "react-router-dom";
import LinkifiedText from "./LinkifyText.";
import AvatarBox from "./AvatarBox";
import UsernameTab from "./UsernameTab";
type Props = {
	id: number;
	text: string;
	createdAt: string;
	onDelete?: (id: number) => void;
};

function CommentCard({ id, text, createdAt, onDelete }: Props) {
	return (
		<div className="relative mb-6 w-full">
			<AvatarBox />
			<UsernameTab />

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
