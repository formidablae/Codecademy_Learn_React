import React from 'react';
import ReactDOM from 'react-dom';
import { StewDescriber } from './StewDescriber';

class MainPage extends React.Component {
    render() {
        return (
            <div>
                <h1>WELCOME 2 MY SITE WHERE I DESCRIBE THINGS!!</h1>
                <h1>Today I will be describing stews!  Tomorrow, who knows!  Life is a journey</h1>
                <StewDescriber stew="watery, pale, extremely cold stew" />
                <h1>Don't forget to clap back in the comments</h1>
            </div>
        );
    }
}

ReactDOM.render(
    <MainPage />,
    document.getElementById('app')
);
