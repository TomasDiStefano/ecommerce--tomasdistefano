import React from 'react';
import { useContext } from 'react'
import { CartContext } from "../Context/CartContext";
import { Link } from 'react-router-dom';
import CartItem from '../CartItem/CartItem';

const Cart = () => {

    const { cart, clearCart, total, productsQty } = useContext(CartContext);

    if (productsQty === 0) {
        return (
            <>
                <h2>El carrito esta vacío</h2>

                <Link to="/"> Comprar ahora </Link>
            </>
        )
    }
    
    return (
        <div>
            {cart.map(producto => <CartItem key={producto.item.id}  {...producto} />)}
            <h3>Total: $ {total} </h3>
            <h3>Cantidad total: {productsQty} </h3>
            <button onClick={() => clearCart()}> Vaciar Carrito </button>
            <Link to="/checkout"> Finalizar Compra </Link>
        </div>
    )
}

export default Cart