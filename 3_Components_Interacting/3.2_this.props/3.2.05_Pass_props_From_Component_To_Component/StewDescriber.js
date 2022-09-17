import React from 'react';

export class StewDescriber extends React.Component {
    render() {
        return (
            <div>
                <h1>I AM THE STEW DESCRIBER</h1>;
                <h1>THE WORLD'S GREATEST STEW IS {this.props.stew.toUpperCase()}!</h1>
                <h1>HERE'S MY DESCRIPTION: IT'S MAD TASTY</h1>
            </div>
        );
    }
}
