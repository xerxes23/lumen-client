import { Container, Typography } from "@material-ui/core";
import { Route, Switch } from "react-router-dom";

import { Login } from "./login/Login";
import React from "react";
import { SignUp } from "./signup/SignUp";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
	root: {
		display: "flex",
		flexDirection: "column",
		justifyContent: "center",
		alignItems: "center",
		height: "100vh",
	},
});

export default function Landing() {
	const classes = useStyles();

	return (
		<Container className={classes.root}>
			<Typography variant="h3">Lumenboard</Typography>
			<Switch>
				<Route path="/signup">
					<SignUp />
				</Route>

				<Route path="/login">
					<Login />
				</Route>
			</Switch>
		</Container>
	);
}
