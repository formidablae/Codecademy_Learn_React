import React from 'react';
import ReactDOM from 'react-dom';

const redPanda = {
    src: 'https://upload.wikimedia.org/wikipedia/commons/b/b2/Endangered_Red_Panda.jpg',
    alt: 'Red Panda',
    width: '200px'
};

class RedPanda extends React.Component {
    render() {
        return (
            <div>
                <h1>Cute Red Panda</h1>
                <img
                    src={redPanda.src}
                    alt={redPanda.alt}
                    width={redPanda.width} />
            </div>
        );
    }
}

ReactDOM.render(
    <RedPanda />,
    document.getElementById('app')
);
