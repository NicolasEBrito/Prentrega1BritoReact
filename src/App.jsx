import React from 'react';
import ItemListContainer from './components/ItemListContainer.jsx';
import NavBar from './components/NavBar.jsx';

const App = () => {
  const items = ['Jujutsu kaisen Vol.1', 'Figura Satoru Gojo', 'Llavero sukuna'];

  return (
    <>
    <NavBar/>
    <div>
      <h1>Más vendidos</h1>
      <ItemListContainer items={items} />
    </div>
    </>
  );
};

export default App;

