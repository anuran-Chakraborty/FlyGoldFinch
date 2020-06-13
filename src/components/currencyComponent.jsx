import React, { Component } from "react";
import currencyReuest from "../services/currencyRequest";

class CurrencyComponent extends Component {
    async convertCurrency() {
        var conversionFactor = await currencyReuest.currencyRequest(
            this.fromCurr.value,
            this.toCurr.value,
        );

        this.toVal.value =
            conversionFactor.data[
                `${this.fromCurr.value}_${this.toCurr.value}`
            ] * this.fromVal.value;
    }

    render() {
        var currencyList = [
            { currency: "XCD", name: "East Caribbean dollar", symbol: "$" },
            { currency: "EUR", name: "European euro", symbol: "€" },
            { currency: "GEL", name: "Georgian lari", symbol: "₾" },
            { currency: "HTG", name: "Haitian gourde", symbol: "G" },
            { currency: "ILS", name: "Israeli new sheqel", symbol: "₪" },
            { currency: "KZT", name: "Kazakhstani tenge", symbol: "лв" },
            { currency: "KWD", name: "Kuwaiti dinar", symbol: "د.ك" },
            { currency: "LSL", name: "Lesotho loti", symbol: "L" },
            { currency: "INR", name: "Indian rupee", symbol: "₹" },
            { currency: "USD", name: "U.S. Dollar", symbol: "$" },
        ];

        return (
            <React.Fragment>
                <h1>Currency Converter</h1>
                <label>From:</label>
                <input
                    type="number"
                    ref={(input) => (this.fromVal = input)}></input>
                <select ref={(select) => (this.fromCurr = select)}>
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
                    disabled
                    ref={(input) => (this.toVal = input)}></input>
                <select ref={(select) => (this.toCurr = select)}>
                    {currencyList.map((currencyElem) => (
                        <option
                            key={"to_" + currencyElem.currency}
                            value={currencyElem.currency}>
                            {currencyElem.name} ({currencyElem.symbol}) (
                            {currencyElem.currency})
                        </option>
                    ))}
                </select>

                <button onClick={(e) => this.convertCurrency(e)}>
                    Convert
                </button>
            </React.Fragment>
        );
    }
}

export default CurrencyComponent;
