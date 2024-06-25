import React, {useContext, useState} from 'react';
import Counter from '../Counter/Counter';
import CartContext from '../../../context/cart/CartContext';
import { useNavigate } from 'react-router-dom';
import './ItemDetail.css'


const ItemDetail = ({ product }) => {
  const [count, setCount]= useState(1)
  const {cart, addItemCart, }= useContext(CartContext)
  const navigate= useNavigate()
  const addItem=()=>{
    addItemCart({...product,cuantity:count})
    navigate("/cart")
  }

  return (
    <div className='detalleProducto'>
      <h2 className='nombre'>{product.name}</h2>
      <p>{product.description}</p>
      <p>Precio:${product.price}</p>
      <img src={product.img} alt={product.name} className='imagen' />
      <div className='divCounter'>
      <Counter count={count} handleCount={setCount} stock={product.stock}/>
      </div>
      <button className='boton' onClick={()=> addItemCart({...product, quantity:count})}>Añadir al carrito</button>
    </div>
  );
};

export default ItemDetail;