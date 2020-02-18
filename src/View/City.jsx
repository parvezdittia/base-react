import React from 'react';
import {Link} from 'react-router-dom';

function City(props) {

    return (
        <Link to={props.city}>{props.city}</Link>
    )

}

export default City;