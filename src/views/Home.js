import React, { Component } from "react";
import Navbar from "../components/navbar";
import CounterComponent from "../components/counterComponent";

class Home extends Component {
    render() {
        return (
            <React.Fragment>
                <Navbar nextLink="/time" nextPage="2"></Navbar>
                <CounterComponent />
            </React.Fragment>
        );
    }
}

export default Home;
