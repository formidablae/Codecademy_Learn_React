import React from 'react';
import ReactDOM from 'react-dom';

export class ChildClass extends React.Component {
    render() {
        return (
            // The stateless component class uses
            // the passed-down handleClick function,
            // accessed here as this.props.onClick,
            // as an event handler:
            <button onClick={this.props.onClick}>
                Click Me!
            </button>
        );
    }
}
