import React from 'react';
import CartWidget from '../cartWidget/CartWidget.jsx';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import styles from './NavBar.module.css';
import Filtro from '../Filtro/Filtro.jsx';

function NavBar() {
  return (
    <>
      <Navbar expand="lg" className={`${styles.navbar} bg-body-tertiary`} >
        <Container className={styles.container}>
          <Nav.Link to="/" as={Link}>Mahoraga Store</Nav.Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className={styles.navbarNav}>
              <Nav.Link to="/" as={Link}>Home</Nav.Link>
              <Nav.Link to='/categoria/manga' as={Link}>Manga</Nav.Link>
              <Nav.Link to='/categoria/figuras' as={Link}>Figuras</Nav.Link>
              <Nav.Link to='/categoria/merch' as={Link}>Merch</Nav.Link>
              <Nav.Link to='/cart' as={Link}>Carrito</Nav.Link>
              <Nav.Link to='/orders' as={Link}>Órdenes</Nav.Link>
              <Nav.Link to='/cart' as={Link}><CartWidget/></Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Filtro categorías={[{ id: 1, nombre: "Manga" }, { id: 2, nombre: "Merch" }]} />
    </>
  );
}

export default NavBar;

