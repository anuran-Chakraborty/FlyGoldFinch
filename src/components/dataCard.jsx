import React, { Component } from 'react';

class DataCard extends Component {
    
    render() { 
        return ( 
            <React.Fragment>
                {this.props.first+" "+this.props.last}
                <br></br>
            </React.Fragment>
         );
    }

    componentDidMount(){

    }


}
 
export default DataCard;