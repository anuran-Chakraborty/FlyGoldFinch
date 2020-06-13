import React, { Component } from 'react';
import Navbar from '../components/navbar'

class Currency extends Component {

    render() { 
        return (
            <React.Fragment>
                <Navbar
                    prevLink="/data"
                    prevPage="3"
                    nextLink="/"
                    nextPage="1"></Navbar>
            </React.Fragment>
        );
    }
}
 
export default Currency;