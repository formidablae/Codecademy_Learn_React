import React, { Component } from "react";
import { Child } from "./Child";

class Parent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "Frarthur"
        };
    }

    render() {
        return <Child name={this.state.name} />;
    }
}

ReactDOM.render(
    <Parent />,
    document.getElementById("app")
);
