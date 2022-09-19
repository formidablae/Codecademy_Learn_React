import React from 'react';
import ReactDOM from 'react-dom';

// <Friend /> as function component
export const Friend = () => {
    return <img src='https://content.codecademy.com/courses/React/react_photo-octopus.jpg' />;
}

// <Friend /> as class component
// export class Friend extends React.Component {
// 	render() {
// 		return <img src='https://content.codecademy.com/courses/React/react_photo-octopus.jpg' />;
// 	}
// }

ReactDOM.render(
    <Friend />,
    document.getElementById('app')
);
