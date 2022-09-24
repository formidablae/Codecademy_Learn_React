import React, { useEffect, useState } from 'react';

export default function Counter() {
    const [clickCount, setClickCount] = useState(0);

    // your code here
    useEffect(() => {
        document.addEventListener('mousedown', increment);
        return () => {
            document.removeEventListener('mousedown', increment);
        };
    });

    const increment = () => {
        setClickCount((prevClickCount) => prevClickCount + 1);
    };

    return (
        <h1>Document Clicks: {clickCount}</h1>
    );
}
