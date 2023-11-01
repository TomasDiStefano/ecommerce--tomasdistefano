import React from 'react';
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
            <button onClick={itemOnAdd}> + </button>
            <strong> {itemQty} </strong>
            <button onClick={itemOnDecrease}> - </button>

            <button onClick={() => handelItemQty(itemQty)}>Agregar al carrito</button>
        </>
      
  )
}

export default ItemCount