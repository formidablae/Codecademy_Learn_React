import React, { useState, useEffect } from 'react';
import { get } from './mockBackend/fetch';

export default function Shop() {
    const [categories, setCategories] = useState(null);
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [items, setItems] = useState({});

    useEffect(() => {
        get('/categories').then((response) => {
            setCategories(response.data);
        });
    }, []);

    useEffect(() => {
        if (!items[selectedCategory]) {
            get(`/items?category=${selectedCategory}`).then((response) => {
                setItems((prev) => ({ ...prev, [selectedCategory]: response.data }));
            });
        }
    }, [selectedCategory, items]);

    if (!categories) {
        return <p>Loading..</p>;
    }

    return (
        <div className='App'>
            <h1>Clothes 'n Things</h1>
            <nav>
                {categories.map((category) => (
                    <button key={category} onClick={() => setSelectedCategory(category)}>
                        {category}
                    </button>
                ))}
            </nav>
            <h2>{selectedCategory}</h2>
            <ul>
                {!items[selectedCategory]
                    ? null
                    : items[selectedCategory].map((item) => <li key={item}>{item}</li>)}
            </ul>
        </div>
    );
}
