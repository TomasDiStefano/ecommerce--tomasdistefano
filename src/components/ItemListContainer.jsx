import React from 'react';
import "./ItemListContainer.css"

const ItemListContainer = (props) => {
    return (
        <div className='greeting-container'>
            <h1>{props.greeting}</h1>
        </div>
    );
}

export default ItemListContainer