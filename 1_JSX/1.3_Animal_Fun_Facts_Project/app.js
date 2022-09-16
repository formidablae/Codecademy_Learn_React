import { animals } from './animals';
import React from 'react';
import ReactDOM from 'react-dom';

const title = '';
const showBackground = true;

const background = (
    <img
        className='background'
        alt='ocean'
        src='/images/ocean.jpg'
    />
);

function displayFact(e) {
    const selectedAnimal = e.target.alt;
    const animalInfo = animals[selectedAnimal];
    const optionIndex = Math.floor(Math.random() * animalInfo.facts.length);
    const funFact = animalInfo.facts[optionIndex];
    document.getElementById('fact').innerHTML = funFact;
}

const images = [];
for (const animal in animals) {
    images.push(
        <img
            className='animal'
            alt={animal}
            key={animal}
            src={animals[animal].image}
            aria-label={animal}
            role='button'
            onClick={displayFact}
        />
    );
}

const animalFacts = (
    <div>
        <h1>{title === '' ? 'Click an animal for a fun fact' : title}</h1>
        {showBackground && background}
        <div className='animals'>
            {images}
        </div>
        <p id='fact'></p>
    </div>
);

ReactDOM.render(animalFacts, document.getElementById('root'));
