import React from 'react';
import { LilButton } from './LilButton';

class BigButton extends React.Component {
    render() {
        console.log(this.props.children);
        return <button>Yo I am big</button>;
    }
}
