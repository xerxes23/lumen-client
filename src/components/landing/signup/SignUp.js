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
	signUpButton: {
		marginTop: 20,
		borderRadius: 20,
		width: 200,
	},
	loginLink: {
		textDecoration: "none",
		margin: "20px auto",
	},
});

export function SignUp() {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const handleNameChange = (event) => {
		setName(event.target.value);
	};

	const handleEmailChange = (event) => {
		setEmail(event.target.value);
	};

	const handlePasswordChange = (event) => {
		setPassword(event.target.value);
	};

	const handleSignUp = (event) => {
		console.log({
			credentials: {
				name,
				email,
				password,
			},
		});
		setName("");
		setEmail("");
		setPassword("");
	};

	const classes = useStyles();

	return (
		<FormControl className={classes.form}>
			<TextField
				className={classes.textInput}
				label="Name"
				value={name}
				onChange={handleNameChange}
			/>
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
				className={classes.signUpButton}
				variant="contained"
				color="primary"
				onClick={handleSignUp}
			>
				Login
			</Button>

			<Link className={classes.loginLink} to="/login">
				{" "}
				Login instead{" "}
			</Link>
		</FormControl>
	);
}
