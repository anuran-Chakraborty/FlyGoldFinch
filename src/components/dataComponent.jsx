import React, { Component } from "react";
import DataCard from "./dataCard";
import dataRequest from "../services/dataRequest";
import { observer, inject } from "mobx-react";

@inject('CounterStore')
@observer
class DataComponent extends Component {
    render() {
        return (
            <React.Fragment>
                {this.props.CounterStore.getLoading ? (
                    <div>
                        <h1>Loading...</h1>
                    </div>
                ) : (
                    <div>
                        {this.props.CounterStore.getNameList.map((data) => (
                            <DataCard
                                key={data.email}
                                first={data.first}
                                last={data.last}></DataCard>
                        ))}
                    </div>
                )}
            </React.Fragment>
        );
    }

    async componentDidMount() {
        // Send a request to the data endpoint
        dataRequest
            .dataRequest()
            .then((response) => {
                this.props.CounterStore.updateData(response.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }
}

export default DataComponent;
