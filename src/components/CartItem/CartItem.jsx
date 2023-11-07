import React from 'react';
import { useContext } from 'react';
import { CartContext } from '../Context/CartContext';

const CartItem = (product) => {
  console.log("ITEM:", product, "QTY", product.itemQty, product.item.id)
  const {deleteProduct} = useContext(CartContext);
  return (
    <div>
      <h4> {product.item.name}</h4>
      <p>Cantidad: {product.itemQty}</p>
      <p>Precio: {product.item.price}</p>
      <button onClick={() => deleteProduct(product.item.id)}></button>
    </div>
  )
}

export default CartItem