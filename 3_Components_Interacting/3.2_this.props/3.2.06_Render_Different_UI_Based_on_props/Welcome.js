import React from 'react';

export class Welcome extends React.Component {
    render() {
        if (this.props.name === 'Wolfgang Amadeus Mozart') {
            return (
                <h2>
                    hello sir it is truly great to meet you here on the web
                </h2>
            );
        } else {
            return (
                <h2>
                    WELCOME "2" MY WEB SITE BABYYY!!!!!
                </h2>
            );
        }
    }
}
