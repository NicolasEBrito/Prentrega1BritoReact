import React, { useEffect, useState } from 'react';
import ItemDetail from './ItemDetail';

const ItemDetailContainer = () => {
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch('/products.json')
      .then(response => response.json())
      .then(data => setProduct(data))
      .catch(error => console.error("Producto no disponible", error));
  }, []);

  return (
    <div>
      {product ? <ItemDetail product={product} /> : <p>En construcción</p>}
    </div>
  );
};

export default ItemDetailContainer;