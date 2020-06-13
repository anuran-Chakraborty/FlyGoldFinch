import React, { Component } from 'react';
import Navbar from '../components/navbar';
import CurrencyComponent from '../components/currencyComponent';

class Currency extends Component {

    render() { 
        return (
            <React.Fragment>
                <Navbar
                    prevLink="/data"
                    prevPage="3"
                    nextLink="/"
                    nextPage="1"></Navbar>
                    <CurrencyComponent></CurrencyComponent>
            </React.Fragment>
        );
    }
}
 
export default Currency;