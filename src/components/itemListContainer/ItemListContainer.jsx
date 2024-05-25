/*import React, { useState, useEffect } from 'react';
import ItemList from '../ItemList/ItemList';
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
};*/
import React, { useEffect, useState } from 'react';
import ItemList from '../ItemList/ItemList';

const ItemListContainer = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch('../db/products.json')
      .then(response => response.json())
      .then(data => setItems(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div>
      {items.length > 0 ? (
        items.map(item => (
          <ItemList key={item.id} item={item} />
        ))
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default ItemListContainer;