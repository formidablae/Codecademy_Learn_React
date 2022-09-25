import React, { Component } from "react";

export class Child extends Component {
    render() {
        return <h1>Hey, my name is {this.props.name}!</h1>;
    }
}
