import React, { useState, useEffect } from 'react';
import { get } from './mockBackend/fetch';

export default function SocialNetwork() {
    const [menu, setMenu] = useState(null);
    useEffect(() => {
        get('/menu').then(({data}) => {
            setMenu(data);
        });
    }, []);

    const [newsFeed, setNewsFeed] = useState(null);
    useEffect(() => {
        get('/news-feed').then(({ data }) => {
            setNewsFeed(data);
        });
    }, []);

    const [friends, setFriends] = useState(null);
    useEffect(() => {
        get('/friends').then(({ data }) => {
            setFriends(data);
        });
    }, []);

    return (
        <div className='App'>
            <h1>My Network</h1>
            {!menu ? <p>Loading..</p> : (
                <nav>
                    {menu.map((menuItem) => (
                        <button key={menuItem}>{menuItem}</button>
                    ))}
                </nav>
            )}
            <div className='content'>
                {!newsFeed ? <p>Loading..</p> : (
                    <section>
                        {newsFeed.map(({ id, title, message, imgSrc }) => (
                            <article key={id}>
                                <h3>{title}</h3>
                                <p>{message}</p>
                                <img src={imgSrc} alt='' />
                            </article>
                        ))}
                    </section>
                )}
                {!friends ? <p>Loading..</p> : (
                    <aside>
                        <ul>
                            {friends
                                .sort((a, b) => (a.isOnline && !b.isOnline ? -1 : 0))
                                .map(({ id, name, isOnline }) => (
                                    <li key={id} className={isOnline ? 'online' : 'offline'}>
                                        {name}
                                    </li>
                                ))}
                        </ul>
                    </aside>
                )}
            </div>
        </div>
    );
}
