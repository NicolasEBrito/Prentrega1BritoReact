import React, { useContext } from 'react'
import CartContext from '../../../context/cart/CartContext'
import '../ItemCart/ItemCart.module.css'
const ItemCart = ({item}) => {
  const {borrarProducto}= useContext(CartContext)
  return (
    <div className='itemCart'>
   <h3>{item.name}</h3>
   <span>{item.quantity}</span>
   <button onClick={()=> borrarProducto(item.id)}>Borrar</button>
  </div>
  )
}

export default ItemCart