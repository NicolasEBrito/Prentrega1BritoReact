import React, { useEffect, useState } from 'react';
import ItemList from '../ItemList/ItemList';

const ItemListContainer = ({id}) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    if (id) {
      fetch(`/products.json?categoryId=${id}`) //nota: realmente no entendí bien si así puedo filtrar por la categoría de mi json
        .then(response => response.json())
        .then(data => setItems(data))
        .catch(error => console.error('No se pueden obtener los productos', error));
    } else {
      fetch('/products.json')
        .then(response => response.json())
        .then(data => setItems(data))
        .catch(error => console.error('No se pueden obtener los productos', error));
    }
  }, [id]);

  return (
    <div>
      {items.length > 0 ? (
        items.map(item => (
          <ItemList key={item.id} item={item} />
        ))
      ) : (
        <p>No hay productos disponibles.</p>
      )}
    </div>
  );
};

export default ItemListContainer;