import React from 'react';

const GUINEAPATHS = [
    'https://content.codecademy.com/courses/React/react_photo-guineapig-1.jpg',
    'https://content.codecademy.com/courses/React/react_photo-guineapig-2.jpg',
    'https://content.codecademy.com/courses/React/react_photo-guineapig-3.jpg',
    'https://content.codecademy.com/courses/React/react_photo-guineapig-4.jpg'
];

export class GuineaPigs extends React.Component {
    constructor(props) {
        super(props);

        this.state = { currentGP: 0 };

        this.interval = null;

        this.nextGP = this.nextGP.bind(this);
    }

    nextGP() {
        let current = this.state.currentGP;
        let next = ++current % GUINEAPATHS.length;
        this.setState({ currentGP: next });
    }

    componentDidMount() {
        this.interval = setInterval(this.nextGP, 5000);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    render() {
        let src = GUINEAPATHS[this.state.currentGP];
        return (
            <div>
                <h1>Cute Guinea Pigs</h1>
                <img src={src} />
            </div>
        );
    }
}
