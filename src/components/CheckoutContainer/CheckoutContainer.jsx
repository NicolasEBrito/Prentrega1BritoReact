import React, { useContext } from 'react'
import Checkout from '../Checkout/Checkout'
import { addDoc, collection, doc, getFirestore, updateDoc } from 'firebase/firestore'
import { Navigate, useNavigate } from 'react-router-dom'
import CartContext from '../../../context/cart/CartContext'
import Swal from 'sweetalert2'
const CheckoutContainer = () => {
    const navigate=useNavigate()
    const {cart, total, borrarCarrito}=useContext(CartContext)
    const completeOrder= async (buyer)=>{
        const order={
            buyer,
            items:cart,
            total:total,
            fecha:new Date().toLocaleString()
        }
        const db =getFirestore()
        const docRef= collection(db, "orders")
        await addDoc(docRef,order)
        cart.map(async item=>{
            const product= await getProductbyid(item.id)
            const docRef= doc(db,"products",item.id)
             await updateDoc(docRef,{stock:product.stock - item.quantity})
        })
        const nuevaOrden = await addDoc(docRef,order)
       borrarCarrito()
       Swal.fire('Muchas gracias por comprar en Mahoraga Store, el id de tu compra es: ' + nuevaOrden.id)
       Navigate("/orders")
    }
  return (
    <div><Checkout completeOrder={completeOrder}/></div>
  )
}

export default CheckoutContainer