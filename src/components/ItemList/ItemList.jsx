import Item from './Item.js';
function ItemList({items}) {
  return (
    <>
      {Items.map(item=><Item item={item} key={item.id}/>)}
    </>
  );
}


export default ItemList;