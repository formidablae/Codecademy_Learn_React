import React from 'react';
import ReactDOM from 'react-dom';

export class Input extends React.Component {
    constructor(props) {
        super(props);
        this.state = { userInput: '' };
        this.handleUserInput = this.handleUserInput.bind(this);
    }

    handleUserInput(e) {
        this.setState({
            userInput: e.target.value
        });
    }

    render() {
        return (
            <div>
                <input
                    type="text"
                    value={this.state.userInput}
                    onChange={this.handleUserInput}
                />
                <h1>{this.state.userInput}</h1>
            </div>
        );
    }
}

ReactDOM.render(
    <Input />,
    document.getElementById('app')
);
