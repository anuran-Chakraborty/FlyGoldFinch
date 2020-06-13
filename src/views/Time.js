import React, { Component } from "react";
import Navbar from "../components/navbar";
import TimeComponent from "../components/timeComponent";


class Time extends Component {
    render() {
        return (
            <React.Fragment>
                <Navbar
                    prevLink="/"
                    prevPage="1"
                    nextLink="/data"
                    nextPage="3"></Navbar>
                <TimeComponent></TimeComponent>

            </React.Fragment>
        );
    }
}

export default Time;
