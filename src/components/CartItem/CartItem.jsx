import React from 'react';
import { useContext } from 'react';
import { CartContext } from '../../Context/CartContext';
import './CartItem.css'

const CartItem = (product) => {
  const { deleteProduct } = useContext(CartContext);
  return (
    <div className='d-flex text-center align-items-center justify-content-around px-auto' style={{ borderRadius: "10px", marginRight: "10px", marginTop: "10px", paddingRight:"30px", width:"100%", height:"150px", background:"white"}} >
        <div className="">
            <img src={product.item.img} alt={product.item.name} style={{height:"150px", width:'150px' , paddingRight:"2rem"}} />
        </div>
        <div className="d-flex flex-column mx-auto px-auto w-100">
            <h3 style={{paddingTop:"0.5rem",fontWeight:"bold", fontSize:"1.3rem"}}>Product</h3>
            <span style={{fontSize:"1rem"}}>{product.item.name}</span>
        </div>
        <div className="d-flex flex-column mx-auto px-auto w-100">
            <h3 style={{paddingTop:"0.5rem",fontWeight:"bold", fontSize:"1.3rem"}} >Quantity</h3>
            <span style={{fontSize:"1rem"}}>{product.itemQty} item/s</span>
        </div>
        <div className="d-flex flex-column mx-auto px-auto w-100">
          <h3 style={{paddingTop:"0.5rem",fontWeight:"bold", fontSize:"1.3rem"}}>Total</h3>
            <span  style={{fontSize:"1rem"}} className="mx-auto">$ {product.itemQty * product.item.price}</span>
        </div>
      
        <button style={{all:"unset", cursor:"pointer"}} onClick={() => deleteProduct(product.item.id)}><i className="bi bi-cart-x"></i> </button>   
    </div>
  )
}

export default CartItem

          /*<div className="item-image mx-auto w-100">
            <img src={product.item.img} alt={product.item.name} style={{height:"150px", width:'150px' , paddingRight:"2rem"}} />
          </div>*/
          
          /*<div className='cartItem--container'>
      <h4> {product.item.name}</h4>
      <p>Cantidad: {product.itemQty}</p>
      <p>Precio: {product.item.price}</p>
      <button onClick={() => deleteProduct(product.item.id)}></button>
    </div>*/

    /* <div className='cart-products-title d-flex text-center align-items-center px-auto' style={{boxShadow:" rgba(0, 0, 0, 0.35) 0px 5px 15px", margin:"2rem", width:"100%", height:"150px"}} >
          <div className="item-image mx-auto w-100">
            <img src={item.img} alt={item.name} style={{height:"150px", width:'150px' , paddingRight:"2rem"}} />
          </div>
          <div className="d-flex flex-column mx-auto px-auto w-100">
            <h3 style={{paddingTop:"0.5rem",fontWeight:"bold", fontSize:"1.3rem"}}>Product</h3>
            <span style={{fontSize:"1rem"}}>{item.name}</span>
          </div>
          <div className="d-flex flex-column mx-auto px-auto w-100">
            <h3 style={{paddingTop:"0.5rem",fontWeight:"bold", fontSize:"1.3rem"}} >Quantity</h3>
            <span style={{fontSize:"1rem"}}>{item.quantity} item/s</span>
          </div>
          <div className="d-flex flex-column mx-auto px-auto w-100">
          <h3 style={{paddingTop:"0.5rem",fontWeight:"bold", fontSize:"1.3rem"}}>Total</h3>
            <span  style={{fontSize:"1rem"}} className="mx-auto">{getSubtotalPrice(item)} <img src={dai} alt="coin" style={{height:"20px", marginBottom:"0.2rem"}}/></span>
          </div>
            <button style={{all:"unset", cursor:"pointer"}} onClick={() => removeItemByID(item.id)}> <img style={{width:"25px", height:"25px",marginRight:"2rem"}} src={deleteButton} alt="delete" /> </button> 
        </div>*/