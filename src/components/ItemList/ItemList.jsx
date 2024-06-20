import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../ItemList/ItemList.module.css'

const ItemList = ({ product }) => {
  const navigate = useNavigate();
  if (!product || !product.nombre || !product.descripción || !product.precio || !product.img) {
    return <div>Producto no disponible</div>;
  }

  return (
    <div className='card'>
      <img src={product.img} alt={`imagen de ${product.nombre}`} />
      <h3>{product.nombre}</h3>
      <p>{product.descripción}</p>
      <span>{product.precio}</span>
      <button onClick={() => navigate("/detail/" + product.id)}>Detalles</button>
    </div>
  );
};

export default ItemList;