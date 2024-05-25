import React, { useState, useEffect } from 'react';
import ItemList from './ItemList.jsx';
import {useParams} from 'react-router-dom';


function ItemListContainer(){
  const [Item, setItemList] = useState([]);
  const {id}= useParams()

  useEffect(() => {
    fetch('/prentrega1react/db/products.json') 
      .then(res => res.json())
      .then(res => {
        setItemList(res);  
      })

  }, [id])
  return(
    <div>
      <ItemList items={item}/>
    </div>
  );
};

export default ItemListContainer;