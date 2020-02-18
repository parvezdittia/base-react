import React from "react";
import ReactDom from "react-dom";

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
		this.cities = ["Delhi", "Mumbai", "Bengaluru", "Kolkata"];

		this.setCurrentTime = this.setCurrentTime.bind(this);
	}

	componentDidMount() {
		this.currentTimeInterval = setInterval(this.setCurrentTime, 1000);

		fetch(
			"http://api.openweathermap.org/data/2.5/weather?q=New+Delhi&APPID=7644dfa29600d94416addbd37e32eb54&units=metric"
		)
			.then(res => res.json())
			.then(res => {
				this.setState({
					temp: res.main.temp
				});
			});
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
				<Cities cities={this.cities}></Cities>
				<Temperature temp={this.state.temp}></Temperature>
			</div>
		);
	}
}

ReactDom.render(<App />, document.getElementById("app"));
