import React from "react";
import ReactDom from "react-dom";

import Timer from './View/Timer.jsx';

class App extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			currentTime: ''
		}

		this.setCurrentTime = this.setCurrentTime.bind(this);

	}

	



	componentDidMount() {
		setInterval(this.setCurrentTime, 1000);
	}

	setCurrentTime() {
		const now = new Date();
		this.setState({
			currentTime: `${now.getDate()}-${now.getMonth() + 1}-${now.getFullYear()} ${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}` 
		})
	}

	render() {
		return (
			<Timer currentTime={this.state.currentTime}></Timer>	
		)
	}

}

ReactDom.render(<App />, document.getElementById("app"));
