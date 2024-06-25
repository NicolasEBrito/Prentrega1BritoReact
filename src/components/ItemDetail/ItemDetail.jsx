import React, {useContext, useState} from 'react';
import Counter from '../Counter/Counter';
import CartContext from '../../../context/cart/CartContext';
import { useNavigate } from 'react-router-dom';


const ItemDetail = ({ product }) => {
  const [count, setCount]= useState(1)
  const {cart, addItemCart, }= useContext(CartContext)
  const navigate= useNavigate()
  const addItem=()=>{
    addItemCart({...product,cuantity:count})
    navigate("/cart")
  }

  return (
    <div>
      <h2>{product.nombre}</h2>
      <p>{product.descripción}</p>
      <p>{product.categoria}</p>
      <p>Precio:{product.precio}</p>
      <img src={product.img} alt={product.name} />
      <Counter count={count} handleCount={setCount} stock={product.stock}/>
      <button onClick={()=> addItemCart({...product, quantity:count})}>Añadir al carrito</button>
    </div>
  );
};

export default ItemDetail;