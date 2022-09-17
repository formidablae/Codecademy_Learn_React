import React from 'react';

export class NavBar extends React.Component {
    render() {
        const pages = ['home', 'blog', 'pics', 'bio', 'art', 'shop', 'about', 'contact'];
        const navLinks = pages.map(page => {
            return (
                <a href={'/' + page}>
                    {page}
                </a>
            )
        });

        return <nav>{navLinks}</nav>;
    }
}
