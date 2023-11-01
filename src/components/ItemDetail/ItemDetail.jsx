import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './ItemDetail.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ItemCount from '../ItemCount/ItemCount';
import { CartContext } from '../Context/CartContext';
import { useContext } from 'react';


const ItemDetail = ({ id, category, name, price, description, img, stock }) => {

  const [itemAddedQty, setItemAddedQty] = useState(0);

  const { addProduct } = useContext(CartContext);

  const handelItemQty = (itemQty) => {
    setItemAddedQty(itemAddedQty + itemQty);
    
    const item = { id, name, price };
    addProduct(item, itemQty);
  }

  return (
    <Container>
      <Row style={{ background: "white", margin: "10px"}}>
        <Col md={6} xs={12}><img style={{width: "100%"}} src={img} alt={name} /></Col>
        <Col style={{ background:"gray"}} >
          <div style={{padding:"10px" }}>
            <h1 style={{paddingBottom: "5px",borderBottom:"1px solid black", fontSize: "30px", fontWeight: "1000", marginTop:"15px"}}>{name}</h1>
            <h3 style={{ fontSize: "20px", fontWeight: "700", marginTop: "30px", marginBottom: "30px" }}> $ {price} /per unit ({stock} in stock)</h3>
            <h2 style={{ marginTop: "20px", fontSize: "30px" }}>Description</h2>
            <p>{description}</p>
            <ItemCount stock={stock} handelItemQty={handelItemQty} />
            <div>
              <Link to="/cart"> Finalizar compra </Link>
            </div>
            
          </div>
          
        </Col>
      </Row>
    </Container>
    
  )
}

export default ItemDetail

/* <div style={{ background: "white", border:"red", margin: "50px" }}>
      <div className='item-detail-container row align-items-top'>
        <div className='item-detail-image col-6 text-end'>
          <img src={img} alt={description} style={{width: "400px", height: "400px" , padding:"50px", backgroundColor:"white"}}/>  
        </div>
        
        <div className='item-detail-description d-flex-column col-4 text-center my-1' >
          <h1 className='text-dark text-start' style={{fontWeight:"bolder", fontSize:"2.3rem"}}> {name} </h1>
          <h2 className='d-flex justify-content-start'style={{paddingTop:"0.2rem", fontSize:"1.7rem" , fontWeight:"bold", color:"black" , textShadow: "1.2px 1px 0.5px white"}}> $ {price}</h2>
          <h3 className='d-flex text-start' style={{color:"black", fontSize:"1.1rem", paddingTop:"0.2rem"}}> Stock ({stock}) units </h3>

          <h5 className='text-start' style={{ paddingTop:"1.2rem", borderBottom: "1px solid rgb(212, 212, 212)"}}>Description</h5>
          <span className='d-flex text-start'> {description} </span>

        </div>
      </div>
    </div>  */