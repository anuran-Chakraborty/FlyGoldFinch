import React, { Component } from "react";
import currencyRequest from "../services/currencyRequest";
import "../styles/currency.css";
import { observer, inject } from "mobx-react";

@inject("CounterStore")
@observer
class CurrencyComponent extends Component {

    // Function to send a request to the api endpoint and update the converted currency
    async convertCurrency() {
        if (this.fromVal.value <= 0) {
            this.props.CounterStore.currencyError("Value must be positive");
            return;
        }

        try {
            var conversionFactor = await currencyRequest.currencyRequest(
                this.fromCurr.value,
                this.toCurr.value,
            );
            this.props.CounterStore.currencyError("");
            this.toVal.value = (
                conversionFactor.data[
                    `${this.fromCurr.value}_${this.toCurr.value}`
                ] * this.fromVal.value
            ).toFixed(2);
        } catch (error) {
            console.log(error);
        }
    }

    render() {

        var currencyList=this.props.CounterStore.getCurrencyList;
        
        return (
            <React.Fragment>
                <div className="currency-form">
                    <h1>Currency Converter</h1>
                    <label>From:</label>
                    <input
                        className="amount"
                        type="number"
                        ref={(input) => (this.fromVal = input)}></input>


                    <select
                        className="currency"
                        ref={(select) => (this.fromCurr = select)}>
                        {currencyList.map((currencyElem) => (
                            <option
                                key={"from_" + currencyElem.currency}
                                value={currencyElem.currency}>
                                {currencyElem.name} ({currencyElem.symbol}) (
                                {currencyElem.currency})
                            </option>
                        ))}
                    </select>
                    <label>To:</label>
                    <input
                        type="number"
                        className="amount"
                        disabled
                        ref={(input) => (this.toVal = input)}></input>
                    <select
                        className="currency"
                        ref={(select) => (this.toCurr = select)}>
                        {currencyList.map((currencyElem) => (
                            <option
                                key={"to_" + currencyElem.currency}
                                value={currencyElem.currency}>
                                {currencyElem.name} ({currencyElem.symbol}) (
                                {currencyElem.currency})
                            </option>
                        ))}
                    </select>

                    <button
                        className="convert-btn"
                        onClick={(e) => this.convertCurrency(e)}>
                        Convert
                    </button>
                    <div className="error">
                        {this.props.CounterStore.getError}
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default CurrencyComponent;
