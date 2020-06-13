import React, { Component } from "react";
import { Link } from "react-router-dom";

const btnStyle={
    margin:"2px"
};
class Navbar extends Component {

    

    render() {
        var btnPrev=null;
        if (this.props.prevLink) {
            // If the previous link is set then render this button
            btnPrev = (
                <Link to={this.props.prevLink}>
                    <button style={btnStyle}>Goto Page {this.props.prevPage}</button>
                </Link>
            );
        }

        var btnNext=null;
        if (this.props.nextLink) {
            // If the next link is set then render this button
            btnNext = (
                <Link to={this.props.nextLink}>
                    <button style={btnStyle}>Goto Page {this.props.nextPage}</button>
                </Link>
            );
        }
        return <React.Fragment>
            <nav>
            {btnPrev}
            {btnNext}
            </nav>
                
        </React.Fragment>;
    }
}

export default Navbar;
