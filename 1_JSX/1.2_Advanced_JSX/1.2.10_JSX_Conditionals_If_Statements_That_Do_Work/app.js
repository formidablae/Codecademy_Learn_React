import React from 'react';
import ReactDOM from 'react-dom';

function coinToss() {
    // This function will randomly return either 'heads' or 'tails'.
    return Math.random() < 0.5 ? 'heads' : 'tails';
}

const pics = {
    kitty: 'https://content.codecademy.com/courses/React/react_photo-kitty.jpg',
    doggy: 'https://content.codecademy.com/courses/React/react_photo-puppy.jpeg'
};
let img;

// if/else statement begins here:
if (coinToss() === 'heads') {
    img = <img src={pics.kitty} />;
} else {
    img = <img src={pics.doggy} />;
}

ReactDOM.render(img, document.getElementById('app'));
