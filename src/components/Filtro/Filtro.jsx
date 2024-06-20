
import React, { useState } from 'react';

const Filtro = ({ categorias, handleCategoriaSeleccionada }) => {
  const [abierto, setAbierto] = useState(false);
  const [selectedOption, setSelectedOption] = useState('Todos');

  const handleOpciones = (value) => {
    setSelectedOption(value);
    setAbierto(false);
    handleCategoriaSeleccionada(value);
  };

  return (
    <div onClick={() => setAbierto(!abierto)}>
      <div>
        {selectedOption}
        <span className='icon'>&#9660;</span>
      </div>
      {abierto && (
        <ul className='opciones'>
          {categorias.map((categoria) => (
            <li key={categoria.id} className='opción' onClick={() => handleOpciones(categoria)}>
              {categoria.nombre}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Filtro;