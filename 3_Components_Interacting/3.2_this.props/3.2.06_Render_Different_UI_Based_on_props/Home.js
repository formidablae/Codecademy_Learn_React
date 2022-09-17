import React from 'react';
import ReactDOM from 'react-dom';
import { Welcome } from './Welcome';

class Home extends React.Component {
    render() {
        return <Welcome name='Ludwig van Beethoven' />;
    }
}

ReactDOM.render(
    <Home />,
    document.getElementById('app')
);
