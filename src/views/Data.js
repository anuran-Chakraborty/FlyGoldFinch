import React, { Component } from 'react';
import Navbar from '../components/navbar'

class Data extends Component {

    render() { 
        return (
            <React.Fragment>
                <Navbar
                    prevLink="/time"
                    prevPage="2"
                    nextLink="/currency"
                    nextPage="4"></Navbar>
            </React.Fragment>
        );
    }
}
 
export default Data;