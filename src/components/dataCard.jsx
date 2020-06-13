import React, { Component } from "react";
import "../styles/dataCard.css";

class DataCard extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="card"> {this.props.first + " " + this.props.last} </div>
            </React.Fragment>
        );
    }

    componentDidMount() {}
}

export default DataCard;
