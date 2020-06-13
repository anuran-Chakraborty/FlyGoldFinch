import React, { Component } from "react";

class CounterComponent extends Component {
    render() {
        return (
            <React.Fragment>
                <span>0</span>
                <button>+</button>
                <button>-</button>
            </React.Fragment>
        );
    }
}

export default CounterComponent;
