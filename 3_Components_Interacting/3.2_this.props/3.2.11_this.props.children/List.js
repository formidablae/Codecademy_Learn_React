import React from 'react';

export class List extends React.Component {
    render() {
        let titleText = `Favorite ${this.props.type}`;
        if (this.props.children instanceof Array) {
            titleText += 's';
        }
        return (
            <div>
                <h1>{titleText}</h1>
                <ul>{this.props.children}</ul>
            </div>
        );
    }
}
