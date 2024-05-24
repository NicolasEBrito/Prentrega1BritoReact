import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {link} from 'react-router-dom';
function Card({item}) {
  return (
    <Card style={{ width: '15rem' }} key={item.id}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>{item.nombre}</Card.Title>
        <Card.Text>
          {item.descripcion}
        </Card.Text>
        <Button variant="primary" as={link} to={`/item/${item.id}`}>Ver producto</Button>
      </Card.Body>
    </Card>
  );
}


export default Card;