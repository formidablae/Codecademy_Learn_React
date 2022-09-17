import React from 'react';
import ReactDOM from 'react-dom';

class QuoteMaker extends React.Component {
    render() {
        return (
            <blockquote>
                <p>
                    The world is full of objects, more or less interesting; I do not wish to add any more.
                </p>
                <cite>
                    <a target="_blank"
                        href="https://en.wikipedia.org/wiki/Douglas_Huebler">
                        Douglas Huebler
                    </a>
                </cite>
            </blockquote>
        );
    }
};

ReactDOM.render(
    <QuoteMaker />,
    document.getElementById('app')
);
