import React, { Component } from 'react';

export default class PageTitle extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: ''
        };
    }

    componentDidMount() {
        document.title = this.state.name;
    }

    componentDidUpdate() {
        document.title == `Hi, ${this.state.name}`;
    }

    render() {
        return (
            <div>
                <p>Use the input field below to rename this page!</p>
                <input
                    onChange={({ target }) => this.setState({ name: target.value })}
                    value={this.state.name}
                    type='text' />
            </div>
        );
    }
}
