import React, { Component } from "react";
import Navbar from "../components/navbar";

class Time extends Component {
    render() {
        return (
            <React.Fragment>
                <Navbar
                    prevLink="/"
                    prevPage="1"
                    nextLink="/data"
                    nextPage="3"></Navbar>
            </React.Fragment>
        );
    }
}

export default Time;
