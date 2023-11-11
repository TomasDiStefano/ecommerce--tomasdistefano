import React from 'react';
import './ItemCount.css';
import { useState } from 'react';

const ItemCount = ({ stock, handelItemQty }) => {

    const [itemQty, setItemQty ] = useState(1);

    const itemOnAdd = () => {
        if (itemQty < stock) {
            setItemQty(itemQty + 1);
        }
    }

    const itemOnDecrease = () => {
        if (itemQty > 1) {
            setItemQty(itemQty - 1);
        }
    }

    return (
        <>
            <button className='increaseDecreaseButton' onClick={itemOnAdd}> + </button>
            <strong > {itemQty} </strong>
            <button className='increaseDecreaseButton' onClick={itemOnDecrease}> - </button>

            <button className='increaseDecreaseButton' onClick={() => handelItemQty(itemQty)}>Agregar al carrito</button>
        </>
      
  )
}

export default ItemCount