import React, { useEffect, useState, } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from '../ItemDetail/ItemDetail.jsx';
import { getFirestore, getDoc, doc } from 'firebase/firestore';

const ItemDetailContainer = () => {
  const {id}= useParams()
  const [product, setProduct]=useState([])

  useEffect(()=>{

    (async()=>{
  
      const db= getFirestore()
      const docRef= doc(db, 'products', id)
      const docSnap = await getDoc(docRef)
      setProduct({id:docSnap.id,...docSnap.data()})
   
    })()
  },[])


return(
  <div>
    <ItemDetail product={product}/>
  </div>
)}
export default ItemDetailContainer;