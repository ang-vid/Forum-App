import { useParams } from "react-router-dom";
import LinkifyText from "../components/LinkifyText..tsx";

type Comment = {
	text: string;
	createdAt: string;
};

export default function PostDetail() {
	const { id } = useParams();

	const comments: Comment[] = JSON.parse(
		localStorage.getItem("PostedComments") || "[]",
	);

	const post = comments[Number(id) - 1];
	// error 404 with react router if post is not found, instead of just showing "Post not found"§
	if (!post) {
		return <div>Post not found</div>;
	}

	return (
		<div className="min-h-screen w-full bg-[#FEFDFA] bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-size-[36px_36px] p-6">
			<div className="mx-auto w-full max-w-5xl border-3 border-[#2B2727] bg-white p-8 shadow-[4px_4px_0_#2B2727]">
				<p className="whitespace-pre-wrap break-words text-2xl leading-10 text-[#2B2727]">
					<LinkifyText text={post.text} />
				</p>
			</div>
		</div>
	);
}

// think about bold/italiks
