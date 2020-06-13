import React, { Component } from "react";
import Navbar from "../components/navbar";
import DataComponent from "../components/dataComponent";

class Data extends Component {
    render() {
        return (
            <React.Fragment>
                <Navbar
                    prevLink="/time"
                    prevPage="2"
                    nextLink="/currency"
                    nextPage="4"></Navbar>
                <div className="main">
                    <DataComponent></DataComponent>
                </div>
            </React.Fragment>
        );
    }
}

export default Data;
