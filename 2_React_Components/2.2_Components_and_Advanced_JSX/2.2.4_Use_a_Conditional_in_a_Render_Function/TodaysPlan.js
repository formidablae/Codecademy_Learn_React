import React from 'react';
import ReactDOM from 'react-dom';

class TodaysPlan extends React.Component {
    render() {
        let task;
        if (!apocalypse) {
            task = 'learn React.js'
        } else {
            task = 'run around'
        }

        return <h1>Today I am going to {task}!</h1>;
    }
}

ReactDOM.render(
    <TodaysPlan />,
    document.getElementById('app')
);
