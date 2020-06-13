import React, { Component } from "react";
import {inject, observer} from "mobx-react";

@inject('CounterStore')
@observer
class CounterComponent extends Component {

    incrementCount(e){
        this.props.CounterStore.incrementCounter();
    }

    decrementCount(e){
        this.props.CounterStore.decrementCounter();
    }

    render() {
        const {CounterStore}=this.props;
        return (
            <React.Fragment>
                <span>{CounterStore.getCounter}</span>
                <button onClick={e=>this.incrementCount(e)}>+</button>
                <button onClick={e=>this.decrementCount(e)}>-</button>
            </React.Fragment>
        );
    }
}

export default CounterComponent;
