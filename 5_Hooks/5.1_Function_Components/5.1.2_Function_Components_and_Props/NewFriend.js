import React from 'react';
import ReactDOM from 'react-dom';

export const NewFriend = (props) => {
    return (
        <div>
            <img src={props.src} />
        </div>
    );
}

ReactDOM.render(
    <NewFriend src="https://content.codecademy.com/courses/React/react_photo-squid.jpg" />,
    document.getElementById('app')
);
