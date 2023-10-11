import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom'
import './Item.css';

const Item = ({id, category, name, price, description, img, stock }) => {
  return (
    <Card className='product-card' >
      <Card.Img className='product-img' variant="top" src={img} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
          $ {price}
        </Card.Text>
        <Link to={`/item/${id}`} > <Button variant="primary">Detalles</Button> </Link>
        
      </Card.Body>
    </Card>
    )
};

export default Item