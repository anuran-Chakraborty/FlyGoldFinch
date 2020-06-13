import React, { Component } from "react";
import Navbar from "../components/navbar";
import CurrencyComponent from "../components/currencyComponent";

class Currency extends Component {
    render() {
        return (
            <React.Fragment>
                <Navbar
                    prevLink="/data"
                    prevPage="3"
                    nextLink="/home"
                    nextPage="1"></Navbar>
                <div className="main">
                    <CurrencyComponent></CurrencyComponent>
                </div>
            </React.Fragment>
        );
    }
}

export default Currency;
