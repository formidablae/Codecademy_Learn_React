import React from 'react';
import ReactDOM from 'react-dom';
import { colorStyles } from './facebookStyles';

let divStyle = {
    backgroundColor: styles.darkBlue,
    color: styles.white
};

export class Wow extends React.Component {
    render() {
        return (
            <div style={divStyle}>
                Wow, I stole these colors from Facebook!
            </div>
        );
    }
}

ReactDOM.render(
    <Wow />,
    document.getElementById('app')
);
