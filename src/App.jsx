import React from 'react';
import ItemListContainer from './components/itemListContainer/ItemListContainer.jsx';  
import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemDetailContainer from './components/itemDetailContainer/ItemDetailContainer.jsx';
import NavBar from './components/navBar/NavBar.jsx';

const App = () => {

  return (
    <>
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path="/" element={<ItemListContainer/>} />
          <Route path="/categoria/:id" element={<ItemListContainer/>}/>
          <Route path="/item/:id" element={<ItemDetailContainer/>}/>  // Usa el componente correcto
        </Routes>
      </BrowserRouter>
      
      <div>
        <h1>Más vendidos</h1>
        <ItemListContainer/>
      </div>
    </>
  );
};

export default App;

