import React from 'react';

export class Example extends React.Component {
    constructor(props) {
        super(props);

        this.state = { userInput: '' };

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        this.setState({
            userInput: e.target.value
        });
    }

    render() {
        return (
            <input
                onChange={this.handleChange}
                type="text" />
        );
    }
}
