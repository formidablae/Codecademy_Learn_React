import React from 'react';
import ReactDOM from 'react-dom';
import { CopyCat } from '../components/CopyCat';

const images = {
    copycat: 'https://content.codecademy.com/courses/React/react_photo_copycat.png',
    quietcat: 'https://content.codecademy.com/courses/React/react_photo_quietcat.png'
};


class CopyCatContainer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            copying: true,
            input: ''
        };

        this.toggleTape = this.toggleTape.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    toggleTape() {
        this.setState({ copying: !this.state.copying })
    }

    handleChange(e) {
        this.setState({ input: e.target.value })
    }

    render() {
        return <CopyCat
            copying={this.state.copying}
            toggleTape={this.toggleTape}
            input={this.state.input}
            handleChange={this.handleChange}
        />
    };
}


ReactDOM.render(<CopyCatContainer />, document.getElementById('app'));
