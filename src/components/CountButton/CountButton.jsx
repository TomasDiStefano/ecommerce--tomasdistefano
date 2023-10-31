import React from 'react';
import { useState } from 'react';

const CountButton = ({ stock }) => {

    const [itemQty, setItemQty ] = useState(1);

    const itemOnAdd = () => {
        console.log(stock);
        if (itemQty < stock) {
            setItemQty(itemQty + 1);
        }
    }

    const itemOnDecrease = () => {
        if (itemQty > 1) {
            setItemQty(itemQty - 1);
        }
    }

    const addToCart = () => {
        console.log('Se agrego al carrito el producto')
    }

    return (
        <>
            <button onClick={itemOnAdd}> + </button>
            <strong> {itemQty} </strong>
            <button onClick={itemOnDecrease}> - </button>

            <button onClick={addToCart}>Agregar al carrito</button>
        </>
      
  )
}

export default CountButton