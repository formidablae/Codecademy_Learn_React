import React from 'react';
import ReactDOM from 'react-dom';

export class Greeting extends React.Component {
    render() {
        if (this.props.signedIn === false) {
            return <h1>GO AWAY</h1>;
        } else {
            return <h1>Hi there, {this.props.name}!</h1>;
        }
    }
}
