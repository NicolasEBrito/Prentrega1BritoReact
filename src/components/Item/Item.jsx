/*import {Link} from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './Item/Item.module.css'
function Item({item}){
    return(
      <div className={styles.card}>
    <Card style={{ width: '15rem' }} key={item.id}>
    <Card.Img variant="top" src="holder.js/100px180" className='img' />
    <Card.Body>
      <Card.Title>{item.name}</Card.Title>
      <Card.Text>
        {item.description}
      </Card.Text>
      <Button variant="primary" as={Link} to={`/item/${item.id}`}>Ver producto</Button>
    </Card.Body>
  </Card>
  </div>
)}

export default Item;*/
import React from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import styles from './Item.module.css';

function Item({ item }) {
  return (
    <div className={styles.card}>
      <Card style={{ width: '15rem' }} key={item.id}>
        <Card.Img variant="top" src={item.img} className={styles.img} />
        <Card.Body>
          <Card.Title>{item.name}</Card.Title>
          <Card.Text>
            {item.description}
          </Card.Text>
          <Button variant="primary" as={Link} to={`/item/${item.id}`}>Ver producto</Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Item;