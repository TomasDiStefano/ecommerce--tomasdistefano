import React from 'react';
import "./CartWidget.css"

const CartWidget = () => {
    return (
        <div className="cart-item">
            <div className="cart-item--notification">0</div>
            <i className="bi bi-cart2 cart-img"></i>
        </div>
    );
}

export default CartWidget