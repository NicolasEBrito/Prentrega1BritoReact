import React from 'react';
import estilos from './NavBar.module.css';
import CartWidget from './CartWidget.jsx'
const NavBar = () => {
  return (
    <nav className={estilos.navbar}>
      <h2>Mahoraga Store</h2>
      <CartWidget/>
        <ul>
            <li>Inicio</li>
            <li>Mangas</li>
            <li>Figuras</li>
            <li>Merch</li>
        </ul>

    </nav>
  )
}

export default NavBar;