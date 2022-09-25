import React from 'react';

class Bad extends React.Component {
    render() {
        this.props.message = 'yo'; // NOOOOOOOOOOOOOO!!!
        return <h1>{this.props.message}</h1>;
    }
}
