import CartContext from "./CartContext";
import React, { useEffect, useState } from 'react'

const CartProvider = ({children}) => {
    const [cart,setCart]=useState([])
    const [total,setTotal]=useState(0)
    const [itemsEnCarro, setItemsEnCarro]=useState(0)

    useEffect(()=>{
      setTotal(cart.reduce((acc, item)=> acc + item.price*item.quantity,0))
      setItemsEnCarro(cart.reduce((acc, item)=> acc + item.quantity,0))
    },[cart])

    const addItemCart= (product)=>{
      const itemExists= cart.find(item=>item.id===product.id)
      if(itemExists){
        setCart(cart.map(item=>{
          if(item.id ==product.id){
            return{
              ...item, quantity: item.quantity + product.quantity
            }
            }
            return item
          }))
          return
        }
        setCart(cart=>([...cart,product]))
      }
    const borrarProducto =(id)=>{
     setCart(cart.filter(item=>item.id != id))
    }
    const borrarCarrito =()=>{
      setCart([])
    }

  return (
    <CartContext.Provider value={{cart,total, addItemCart, borrarProducto, borrarCarrito, itemsEnCarro}}>
        {children}
    </CartContext.Provider>
  )
}

export default CartProvider