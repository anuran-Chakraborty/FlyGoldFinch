import React, { Component } from "react";
import { inject, observer } from "mobx-react";

@inject("CounterStore")
@observer
class TimeComponent extends Component {
    render() {
        return (
            <React.Fragment>
                <h1>Time</h1>
                <h2>{this.props.CounterStore.getTime}</h2>
            </React.Fragment>
        );
    }
    componentDidMount() {
        var dateString = new Date(new Date().getTime()).toLocaleTimeString();
        this.props.CounterStore.updateTime(dateString);

        this.updateInterval = setInterval(() => {
            var dateString = new Date(
                new Date().getTime(),
            ).toLocaleTimeString();
            this.props.CounterStore.updateTime(dateString);
        }, 1000);
    }
}

export default TimeComponent;
