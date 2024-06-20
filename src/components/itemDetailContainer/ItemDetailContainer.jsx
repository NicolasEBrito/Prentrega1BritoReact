import React, { useEffect, useState, } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from '../ItemDetail/ItemDetail.jsx';
import { getFirestore, getDoc, doc } from 'firebase/firestore';
import Loader from '../Loader/Loader.jsx'
const ItemDetailContainer = () => {
  const {id}= useParams()
  const [product, setProduct]=useState([])
  const [loader, setLoader]= useState(true)
  useEffect(()=>{

    (async()=>{
      setLoader(true)
      const db= getFirestore()
      const docRef= doc(db, 'products', id)
      const docSnap = await getDoc(docRef)
      setProduct({id:docSnap.id,...docSnap.data()})
      setLoader(false)
    })()
  },[])

if (loading) return <Loader/>
return(
  <div>
    <ItemDetail product={product}/>
  </div>
)}
export default ItemDetailContainer;