import React from 'react';

class Example extends React.Component {
    handleEvent() {
        alert(`I am an event handler.
      If you see this message,
      then I have been called.`);
    }

    render() {
        return (
            <h1 onClick={this.handleEvent}>
                Hello world
            </h1>
        );
    }
}
