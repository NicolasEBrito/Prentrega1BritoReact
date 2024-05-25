import React, { useState } from 'react';

const ItemCount = ({ valorInicial, suma, resta }) => {
  const [count, setCount] = useState(valorInicial || 0);

  const sumaProducto = () => {
    setCount(count + 1);
    if (suma) {
      suma(count + 1);
    }
  };

  const restaProducto = () => {
    if (count > 0) {
      setCount(count - 1);
      if (resta) {
        resta(count - 1);
      }
    }
  };

  return (
    <div>
      <button onClick={sumaProducto}>-</button>
      <input type="number" value={count} readOnly />
      <button onClick={restaProducto}>+</button>
    </div>
  );
};

export default ItemCount;