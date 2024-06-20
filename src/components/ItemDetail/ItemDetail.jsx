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
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <p>{product.categoria}</p>
      <img src={product.image} alt={product.name} />
      <Counter count={count} handleCount={setCount} stock={product.stock}/>
      <button onClick={()=> addItemCart({...product, quantity:count})}>Añadir al carrito</button>
    </div>
  );
};

export default ItemDetail;