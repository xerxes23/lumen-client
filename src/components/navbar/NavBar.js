import { Link } from "react-router-dom";
import React from "react";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
	navbar: {
		display: "flex",
		flexDirection: "row",
		justifyContent: "space-between",
		padding: 20,
	},
	logo: {
		display: "flex",
		fontSize: 32,
		fontWeight: "bolder",
		textDecoration: "none",
		color: "black",
	},
	navbarLinks: {
		display: "flex",
		flexDirection: "row",
	},
});

export function Navbar() {
	const classes = useStyles();

	return (
		<div className={classes.navbar}>
			<Link to="/dashboard" className={classes.logo}>
				Lumenboard
			</Link>
			<div className={classes.navbarLinks}>
				<div>Add Question</div>
				<div>Profile</div>
				<div>Logout</div>
			</div>
		</div>
	);
}
