import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './ItemDetail.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ItemCount from '../ItemCount/ItemCount';
import { CartContext } from '../../Context/CartContext';
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