import React from "react";
import { Switch, Route } from "react-router-dom";

import Delhi from "../Cities/Delhi.jsx";
import Bengaluru from "../Cities/Bengaluru.jsx";
import Kolkata from "../Cities/Kolkata.jsx";
import Mumbai from "../Cities/Mumbai.jsx";

function Temperature(props) {
	return (
		<Switch>
			<Route path="/delhi">
				<Delhi />
			</Route>
			<Route path="/mumbai">
				<Mumbai />
			</Route>
			<Route path="/bengaluru">
				<Bengaluru />
			</Route>
			<Route path="/kolkata">
				<Kolkata />
			</Route>
		</Switch>
	);
}

export default Temperature;
