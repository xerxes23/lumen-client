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
			<div className={classes.logo}>Lumenboard</div>
			<div className={classes.navbarLinks}>
				<div>Add Question</div>
				<div>Profile</div>
				<div>Logout</div>
			</div>
		</div>
	);
}
