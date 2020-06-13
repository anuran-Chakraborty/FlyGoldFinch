import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../styles/navbar.css";

class Navbar extends Component {
    render() {
        var btnPrev = null;
        if (this.props.prevLink) {
            // If the previous link is set then render this button
            btnPrev = (
                <Link to={this.props.prevLink}>
                    <button className="prevBtn">
                        &lt; Goto Page {this.props.prevPage}
                    </button>
                </Link>
            );
        }

        var btnNext = null;
        if (this.props.nextLink) {
            // If the next link is set then render this button
            btnNext = (
                <Link to={this.props.nextLink}>
                    <button className="nextBtn">
                        Goto Page {this.props.nextPage} &gt;
                    </button>
                </Link>
            );
        }
        return (
            <React.Fragment>
                <div className="nav">
                    {btnPrev}
                    {btnNext}
                </div>
                
            </React.Fragment>
        );
    }
}

export default Navbar;
