import {Link} from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Item({item}){
    return(
    <Card style={{ width: '15rem' }} key={item.id}>
    <Card.Img variant="top" src="holder.js/100px180" />
    <Card.Body>
      <Card.Title>{item.nombre}</Card.Title>
      <Card.Text>
        {item.descripcion}
      </Card.Text>
      <Button variant="primary" as={Link} to={`/item/${item.id}`}>Ver producto</Button>
    </Card.Body>
  </Card>
)}

export default Item;