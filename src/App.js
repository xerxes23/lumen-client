import "./App.css";

import { Redirect, Route, Switch } from "react-router-dom";

import Landing from "./components/landing/Landing";

function App() {
	return (
		<div className="App">
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
