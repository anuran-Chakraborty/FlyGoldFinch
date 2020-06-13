import React, { Component } from "react";
import Navbar from "../components/navbar";
import CounterComponent from "../components/counterComponent";
import "../styles/commonStyles.css";

class Home extends Component {
    render() {
        return (
            <React.Fragment>
                <Navbar nextLink="/time" nextPage="2"></Navbar>
                <div className="main">
                    <CounterComponent />
                </div>
            </React.Fragment>
        );
    }
}

export default Home;
