import React from "react";
import City from "./City.jsx";
import {BrowserRouter} from 'react-router-dom';

function Cities(props) {

	const cities = props.cities.map(city=><City city={city}></City>)

	return (
		<BrowserRouter>
			{cities}
		</BrowserRouter>
	)
}

export default Cities;
