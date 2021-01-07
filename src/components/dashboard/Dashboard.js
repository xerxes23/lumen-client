import { Navbar } from "../navbar/Navbar";
import React from "react";

export function Dashboard() {
	return (
		<div>
			<Navbar />
			<h1>Dashboard</h1>
			<div>
				<div>Question: How are you?</div>
				<div>Answer: I'm good.</div>
			</div>
		</div>
	);
}
