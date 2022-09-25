import React from 'react';
import ReactDOM from 'react-dom';
import { ChildClass } from './ChildClass';

class ParentClass extends React.Component {
    constructor(props) {
        super(props);

        this.state = { totalClicks: 0 };

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        const total = this.state.totalClicks;

        // calling handleClick will 
        // result in a state change:
        this.setState(
            { totalClicks: total + 1 }
        );
    }

    // The stateful component class passes down
    // handleClick to a stateless component class:
    render() {
        return (
            <ChildClass onClick={this.handleClick} />
        );
    }
}
