import { Navbar } from "../navbar/Navbar";
import React from "react";

export function Dashboard() {
	const upvote = () => {
		console.log("Upvoted");
	};
	return (
		<div>
			<Navbar />
			<h1>Dashboard</h1>
			<div>
				<div>Question: How are you?</div>
				<div>Answer: I'm good.</div>
				<div>
					<button onClick={upvote}>Upvote</button>
					<button>Downvote</button>
					<button>Share</button>
				</div>
			</div>
		</div>
	);
}
