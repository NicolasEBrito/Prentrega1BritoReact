import React, { useState } from 'react';

const Filtro = ({ categorias, handleCategoriaSeleccionada }) => {
  const [abierto, setAbierto] = useState(false);
  const [selectedOption, setSelectedOption] = useState('Todos');

  const handleOpciones = (value) => {
    setSelectedOption(value.name);
    setAbierto(false);
    handleCategoriaSeleccionada(value.id); 
  };

  return (
    <div onClick={() => setAbierto(!abierto)}>
      <div>
        {selectedOption}
        <span className='icon'>&#9660;</span> 
      </div>
      {abierto && (
        <ul className='opciones'>
          {categorías && categorías.map((name) => (
            <li key={name.id} className='opción' onClick={() => handleOpciones(name)}>
              {name.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Filtro;