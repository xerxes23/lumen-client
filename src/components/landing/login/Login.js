import { Button, TextField } from "@material-ui/core";
import React, { useState } from "react";

import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
	root: {
		display: "flex",
		flexDirection: "column",
	},
	loginButton: {
		marginTop: 25,
	},
});

export function Login() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const handleEmailChange = (event) => {
		setEmail(event.target.value);
	};

	const handlePasswordChange = (event) => {
		setPassword(event.target.value);
	};

	const handleLogin = (event) => {
		console.log({
			credentials: {
				email,
				password,
			},
		});
		setEmail("");
		setPassword("");
	};

	const classes = useStyles();

	return (
		<form className={classes.root}>
			<TextField
				id="standard-basic"
				label="Email"
				value={email}
				onChange={handleEmailChange}
			/>
			<TextField
				id="standard-basic"
				label="Password"
				type="password"
				value={password}
				onChange={handlePasswordChange}
			/>
			<Button
				className={classes.loginButton}
				variant="contained"
				color="primary"
				onClick={handleLogin}
			>
				Login
			</Button>
		</form>
	);
}
