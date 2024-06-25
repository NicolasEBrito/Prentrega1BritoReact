import React, {useState, useEffect} from 'react'
import {collection, getDocs, getFirestore} from 'firebase/firestore'
import './OrderContainer.css'

const OrderContainer = () => {
    const [orders, setOrders]=useState([])
    useEffect(()=>{
      (async()=>{
        const db= getFirestore()
        const docsRef= collection(db, 'orders')
        const querySnapshot= await getDocs(docsRef)
        setOrders(querySnapshot.docs.map(doc => ({id:doc.id, ...doc.data()})))
      })()
    },[])
  
    return (
      <div className='ordenes'>
        <p className='titulo'>Estos son los id de sus órdenes:</p>
        {orders.map(order=> <div key={order.id}><p>{order.id}</p></div>)}
      </div>
    );
  };


export default OrderContainer