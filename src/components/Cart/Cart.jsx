import React from 'react';
import { useContext } from 'react'
import { CartContext } from "../../Context/CartContext";
import { Link } from 'react-router-dom';
import CartItem from '../CartItem/CartItem';
import './Cart.css'

import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Cart = () => {

    const { cart, clearCart, total, productsQty } = useContext(CartContext);

    if (productsQty === 0) {
        return (
            <div className='cart--containter' style={{ background: "white", margin: "20px", textAlign:"center" }}>
                <i class="bi bi-cart4" style={{fontSize:"70px"}}></i>
                <h1>El carrito esta vacío</h1>

                <Link style={{ textDecoration: 'inherit', color: 'inherit' }} to="/">
                    <button className="summary--button" style={{width:"auto", padding:"10px"}} onClick={() => clearCart()}><i className="bi bi-bag"></i> Comprar ahora</button>
                </Link>  
            </div>
        )
    }
    
    return (
        <div className='cart--containter'>
            
            <Row style={{paddingTop:"15px"}}>
                <Col md={9} xs={12} >
                    <i className="bi bi-bag cart--title"> Mi compra </i> 
                    {cart.map(producto => <CartItem key={producto.item.id}  {...producto} />)}
                </Col>
                <Col md={3} xs={12}>
                    <i className="bi bi-receipt cart--title"> Total </i> 
                    <div style={{ background: "white", marginTop:"10px" ,borderRadius: "10px", padding:"10px"}}>
                        <h4>Total: $ {total} </h4>
                        <h4>Productos: {productsQty} </h4>
                        <button className="summary--button" onClick={() => clearCart()}> Vaciar Carrito </button>
                        <Link style={{ textDecoration: 'inherit', color: 'inherit' }} to="/checkout">
                            <button className="summary--button" onClick={() => clearCart()}> Finalizar compra </button>
                        </Link>    
                    </div>
                </Col>
            </Row>
        </div>
        
    )
}

export default Cart