import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './Item.css';

const Item = ({ id, category, specification, price, img }) => {
  console.log(img);
  return (
    <Card className='product-card' >
      <Card.Img className='product-img' variant="top" src={img} />
      <Card.Body>
        <Card.Title>{category} + {specification}</Card.Title>
        <Card.Text>
          Aca va la descripcion
        </Card.Text> 
        <Button variant="primary">Comprar</Button>
      </Card.Body>
    </Card>
    )
};

export default Item