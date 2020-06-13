import React, { Component } from "react";
import Navbar from "../components/navbar";
import TimeComponent from "../components/timeComponent";
import "../styles/commonStyles.css";

class Time extends Component {
    render() {
        return (
            <React.Fragment>
                
                <Navbar
                    prevLink="/home"
                    prevPage="1"
                    nextLink="/data"
                    nextPage="3"></Navbar>
                <div className="main timeComp">
                <TimeComponent></TimeComponent>
                </div>
            </React.Fragment>
        );
    }
}

export default Time;
