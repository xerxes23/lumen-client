import { Redirect, Route, Switch } from "react-router-dom";

import Landing from "./components/landing/Landing";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
	app: {
		width: "100vw",
	},
});

function App() {
	const classes = useStyles();

	return (
		<div className={classes.app}>
			<Switch>
				<Route path="/">
					<Landing />
				</Route>
			</Switch>
			<Route exact path="/">
				<Redirect to="/signup" />
			</Route>
		</div>
	);
}

export default App;
