import { Navbar } from "../navbar/Navbar";
import React from "react";

export function Dashboard() {
	const upVote = () => {
		console.log("Upvoted");
	};

	const downVote = () => {
		console.log("Downvoted");
	};

	const handleShare = () => {
		console.log("Shared");
	};
	return (
		<div>
			<Navbar />
			<h1>Dashboard</h1>
			<input type="text" />
			<div>
				<div>Question: How are you?</div>
				<div>Answer: I'm good. How are you?</div>
				<div>
					<button onClick={upVote}>Upvote</button>
					<button onClick={downVote}>Downvote</button>
					<button onClick={handleShare}>Share</button>
				</div>
			</div>
			<div>
				<div>Question: How are you?</div>
				<div>Answer: I'm good.</div>
				<div>
					<button onClick={upVote}>Upvote</button>
					<button onClick={downVote}>Downvote</button>
					<button onClick={handleShare}>Share</button>
				</div>
			</div>
		</div>
	);
}
