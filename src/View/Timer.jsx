import React from 'react';

class Timer extends React.Component {

    constructor(props) {
        super(props);
    }

    componentWillReceiveProps(nextProps, nextState){
        
    }

    render() {
        return (
            <div>
                {this.props.currentTime}
            </div>
        ) 
    }


}

export default Timer;