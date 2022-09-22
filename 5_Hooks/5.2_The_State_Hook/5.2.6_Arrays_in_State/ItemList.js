import React from "react";

export default function ItemList({ items, onItemClick }) {

    const handleClick = ({ target }) => {
        const item = target.value;
        onItemClick(item);
    };
    return (
        <div>
            {items.map((item, index) => (
                <button value={item} onClick={handleClick} key={index}>
                    {item}
                </button>
            ))}
        </div>
    );
}
