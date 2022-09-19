import React from 'react';
import ReactDOM from 'react-dom';

class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = { date: new Date() };
    }

    render() {
        return <div>{this.state.date.toLocaleTimeString()}</div>;
    }

    componentDidMount() {
        // Paste your code here.
        const oneSecond = 1000;
        setInterval(() => {
            this.setState({ date: new Date() });
        }, oneSecond);
    }
}

ReactDOM.render(<Clock />, document.getElementById('app'));
