import { Container, Typography } from "@material-ui/core";
import { Route, Switch } from "react-router-dom";

import { Login } from "./login/Login";
import React from "react";
import { SignUp } from "./signup/SignUp";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
	mainContainer: {
		display: "flex",
		flexDirection: "column",
		justifyContent: "center",
		alignItems: "center",
		height: "100vh",
		width: "100vw",
		backgroundColor: "#ffebee",
	},
	header: {
		fontWeight: 500,
	},
	loginButton: {
		marginTop: 10,
	},
});

export default function Landing() {
	const classes = useStyles();

	return (
		<div className={classes.mainContainer}>
			<Typography className={classes.header} variant="h3">
				Lumenboard
			</Typography>
			<Switch>
				<Route path="/signup">
					<SignUp />
				</Route>

				<Route path="/login">
					<Login />
				</Route>
			</Switch>
		</div>
	);
}
