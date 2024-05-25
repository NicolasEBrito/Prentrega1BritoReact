import React from 'react'
const ItemList = ({ item }) => {
  return (
    <div>
      <h3>{item.name}</h3>
      <p>{item.description}</p>
    </div>
  );
};

export default ItemList;