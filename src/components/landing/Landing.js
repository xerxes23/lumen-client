import { Link, Route, Switch } from "react-router-dom";

import { Login } from "./login/Login";
import React from "react";
import { SignUp } from "./signup/SignUp";
import { Typography } from "@material-ui/core";

export default function Landing() {
	return (
		<>
			<Typography variant="h1">Welcome to to Lumenboard</Typography>
			<Typography variant="h2">
				This is the place where you find all the anwsers
			</Typography>

			<Switch>
				<Route path="/signup">
					<SignUp />
				</Route>

				<Route path="/login">
					<Login />
				</Route>
			</Switch>
		</>
	);
}
