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
    
    const item = { id, name, price, img };
    addProduct(item, itemQty);
  }


  
  return (
    <>
      {(name) && 
      <Container>
        <Row style={{ background: "white", margin: "10px"}}>
          <Col md={6} xs={12}><img style={{width: "100%"}} src={img} alt={name} /></Col>
          <Col style={{ background:"gray"}} >
            <div style={{padding:"10px" }}>
              <h1 style={{paddingBottom: "5px",borderBottom:"1px solid black", fontSize: "30px", fontWeight: "1000", marginTop:"15px", color: "black"}}>{name}</h1>
              <h3 style={{ fontSize: "20px", fontWeight: "700", marginTop: "30px", marginBottom: "30px",color: "black" }}> $ {price} /por unidad ({stock} en stock)</h3>
              <h2 style={{ marginTop: "20px", fontSize: "30px",color: "black" }}>Descripción</h2>
              <p style={{ color: "black"}}>{description}</p>
              <ItemCount stock={stock} handelItemQty={handelItemQty} />
              
              <Row>
                <Col md={6} xs={12}>
                  <Link to="/cart"  style={{textDecoration:'inherit', color:'inherit'}}>
                    <div className='detailButtons'>
                      <i className="bi bi-cart2  "> Ir al carrito </i>    
                    </div>
                  </Link>  
                  </Col>
                  <Col md={6} xs={12}>
                  <Link to="/"  style={{textDecoration:'inherit', color:'inherit'}}>
                    <div className='detailButtons'>
                      <i className="bi bi-bag "> Continuar compra </i>    
                    </div>
                  </Link>  
                </Col>
              </Row>
              
            </div>
            
          </Col>
        </Row>
      </Container>}
    {(!name) && <h1>Producto no disponible</h1>}
      
      
    </>
  )
}

export default ItemDetail