import React from "react";
import ReactDom from "react-dom";
import { BrowserRouter } from "react-router-dom";

import Timer from "./View/Timer.jsx";
import Temperature from "./View/Temperature.jsx";
import Cities from "./View/Cities.jsx";

class App extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			currentTime: "",
			temp: ""
		};
		this.currentTimeInterval = "";
		this.cities = ["delhi", "mumbai", "bengaluru", "kolkata"];

		this.setCurrentTime = this.setCurrentTime.bind(this);
	}

	componentDidMount() {
		this.currentTimeInterval = setInterval(this.setCurrentTime, 1000);
	}

	setCurrentTime() {
		const now = new Date();
		this.setState({
			currentTime: `${now.getDate()}-${now.getMonth() +
				1}-${now.getFullYear()} ${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`
		});
	}

	componentWillUnmount() {
		clearInterval(this.currentTimeInterval);
	}

	render() {
		return (
			<div>
				<Timer currentTime={this.state.currentTime}></Timer>
				<BrowserRouter>
					<Cities cities={this.cities}></Cities>
					<Temperature cities={this.cities}></Temperature>
				</BrowserRouter>
			</div>
		);
	}
}

ReactDom.render(<App />, document.getElementById("app"));
