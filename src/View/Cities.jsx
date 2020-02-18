import React from "react";
import { Link } from "react-router-dom";

function Cities(props) {
	const cities = props.cities.map(city => <Link to={"/" + city}>{city}</Link>);

	return <div>{cities}</div>;
}

export default Cities;
