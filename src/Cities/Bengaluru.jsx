import React from "react";

class Bengaluru extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			temp: ""
		};
	}

	componentDidMount() {
		fetch(
			"http://api.openweathermap.org/data/2.5/weather?q=Bengaluru&APPID=7644dfa29600d94416addbd37e32eb54&units=metric"
		)
			.then(res => res.json())
			.then(res => {
				this.setState({
					temp: res.main.temp
				});
			});
	}

	render() {
		return <div>{this.state.temp}</div>;
	}
}

export default Bengaluru;
