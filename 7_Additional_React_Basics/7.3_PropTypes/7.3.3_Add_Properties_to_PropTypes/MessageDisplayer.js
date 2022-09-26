import React from 'react';
import PropTypes from 'prop-types';

export class MessageDisplayer extends React.Component {
    render() {
        return <h1>{this.props.message}</h1>;
    }
}

// This propTypes object should have
// one property for each expected prop:
MessageDisplayer.propTypes = {
    message: PropTypes.string
};
