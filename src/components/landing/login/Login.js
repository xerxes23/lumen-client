import { Button, FormControl, TextField } from "@material-ui/core";
import React, { useState } from "react";

import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
	form: {
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
		width: 300,
	},
	textInput: {
		marginTop: 20,
		width: 300,
	},
	loginButton: {
		marginTop: 20,
		borderRadius: 20,
		width: 200,
	},
	signupLink: {
		textDecoration: "none",
		margin: "20px auto",
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
		<FormControl className={classes.form}>
			<TextField
				className={classes.textInput}
				label="Email"
				value={email}
				onChange={handleEmailChange}
			/>
			<TextField
				className={classes.textInput}
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

			<Link className={classes.signupLink} to="/signup">
				{" "}
				Sign Up instead{" "}
			</Link>
		</FormControl>
	);
}
