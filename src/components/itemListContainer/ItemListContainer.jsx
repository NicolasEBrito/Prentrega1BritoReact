import React, { useState, useEffect } from 'react';

const ItemListContainer = () => {
  const [itemList, setItemList] = useState([]);

  useEffect(() => {
    fetch('/prentrega1react/db/products.json') 
      .then(res => res.json())
      .then(data => {
        setItemList(data);  
      })

  }, []);

  return (
    <div>
      {itemList && itemList.length > 0 ? (
        <ul>
          {itemList.map((item, index) => (
            <li key={index}>
              <p>Nombre: {item.nombre}</p>
              <p>Categoría: {item.categoria}</p>
              <p>Descripción: {item.descripcion}</p>
              <img>{item.img}</img>
            </li>
          ))}
        </ul>
      ) : (
        <p>No hay artículos disponibles</p>
      )}
    </div>
  );
};

export default ItemListContainer;