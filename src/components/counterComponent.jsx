import React, { Component } from "react";
import {inject, observer} from "mobx-react";
import "../styles/counter.css"

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
                
                <button className="button increment" onClick={e=>this.incrementCount(e)}>+</button>
                <button className="button decrement" onClick={e=>this.decrementCount(e)}>-</button>
                <span className="counterValue">{CounterStore.getCounter}</span>
            </React.Fragment>
        );
    }
}

export default CounterComponent;
