import React, { useState } from 'react'
import './Checkout.css'

const Checkout = ({completeOrder}) => {
    const [nameBuyer, setNameBuyer]=useState("")
    const [telBuyer, setTelBuyer]= useState("")
    const [emailBuyer, setEmailBuyer]=useState("")
    const handleCompleteOrder= async (e)=>{
        e.preventDefault()
        const buyer={
            name:nameBuyer,
            tel: telBuyer,
            email: emailBuyer,
        }
        await completeOrder(buyer)
    }
  return (
   <form className='checkoutBuyer' onSubmit={(e)=>handleCompleteOrder(e)}>
    <input type="text" value={nameBuyer} onChange={(e)=>setNameBuyer(e.target.value)}placeholder='Ingrese su nombre' className='input' required />
    <input type="number" value={telBuyer} onChange={(e)=>setTelBuyer(e.target.value)} placeholder='Ingrese su teléfono' className='input' required />
    <input type="email" value={emailBuyer} onChange={(e)=>setEmailBuyer(e.target.value)} placeholder='Ingrese su Email' className='input' required />
    <div className='divBoton1'>
    <button type='submit' className='botonCheckout'>Comprar Ahora</button>
    </div>
   </form>
  )
}

export default Checkout