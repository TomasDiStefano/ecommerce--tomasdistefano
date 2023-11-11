import React from 'react';
import { useContext } from 'react';
import { CartContext } from "../Context/CartContext";
import { Link } from 'react-router-dom';
import "./CartWidget.css"

const CartWidget = () => {
    const { productsQty } = useContext(CartContext);

    return (
        <div className="cart-item">
            <i className="bi bi-cart2 cart-img"></i>
            {productsQty > 0 && <div className="cart-item--notification">{productsQty}</div>}
        </div>
    );
}
export default CartWidget