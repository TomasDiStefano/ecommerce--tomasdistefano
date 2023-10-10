import React from 'react';
//import Button from 'react-bootstrap/Button';
//import Card from 'react-bootstrap/Card';

const Item = ({ id, category, specification, price, img }) => {
    console.log("ID", id);
    return (
        <h1> id: {id} </h1>
        /*<Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src="holder.js/100px180" />
          <Card.Body>
            <Card.Title>{category} + {specification}</Card.Title>
            <Card.Text>
              Aca va la descripcion
            </Card.Text> 
            <Button variant="primary">Comprar</Button>
          </Card.Body>
        </Card>*/
    )
};

export default Item