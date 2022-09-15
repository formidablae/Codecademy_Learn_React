import React from 'react';
import ReactDOM from 'react-dom';

let message;

if (user.age >= drinkingAge) {
    message = (
        <h1>
            Hey, check out this alcoholic beverage!
        </h1>
    );
} else {
    message = (
        <h1>
            Hey, check out these earrings I got at Claire's!
        </h1>
    );
}

ReactDOM.render(
    message,
    document.getElementById('app')
);
