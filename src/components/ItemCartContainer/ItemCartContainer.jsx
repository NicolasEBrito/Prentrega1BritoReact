import React, { useContext } from 'react';
import CartContext from '../../../context/cart/CartContext';
import ItemCart from '../ItemCart/ItemCart';
import { useNavigate } from 'react-router-dom';
import CarritoVacio from '../CarritoVacio/CarritoVacio';

const ItemCartContainer = () => {
  const { cart, total } = useContext(CartContext);
  const navigate = useNavigate();

  return (
    <div className='cartContainer'>
      {cart.length === 0 ? (
        <CarritoVacio message="Carrito vacío" />
      ) : (
        <>
          <div>
            {cart.map(item => <ItemCart key={item.id} item={item} />)}
            <p>Total: {total}</p>
            <button onClick={() => navigate("checkout")}>Finalizar Compra</button>
          </div>
        </>
      )}
    </div>
  );
}

export default ItemCartContainer;