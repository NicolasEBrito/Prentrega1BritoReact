import React, { useState } from 'react';

const Filtro = ({ categorías, handleCategoriaSeleccionada }) => {
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
          {categorías && categorías.map((nombre) => (
            <li key={nombre.id} className='opción' onClick={() => handleOpciones(nombre)}>
              {nombre.nombre}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Filtro;