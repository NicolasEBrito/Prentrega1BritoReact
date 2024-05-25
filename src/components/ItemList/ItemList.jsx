/*import Item from '../Item/Item.jsx';
function ItemList({items}) {
  return (
    <>
      {Items.map(item=><Item item={item} key={item.id}/>)}
    </>
  );
}


export default ItemList;
import React from 'react';*/

const ItemList = ({ item }) => {
  return (
    <div>
      <h3>{item.name}</h3>
      <p>{item.description}</p>
    </div>
  );
};

export default ItemList;