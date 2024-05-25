import React from 'react';

const ItemDetail = ({ product }) => {
  return (
    <div>
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <p>{product.categoria}</p>
      <img src={product.image} alt={product.name} />
    </div>
  );
};

export default ItemDetail;