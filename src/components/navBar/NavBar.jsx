import React from 'react';
import CartWidget from '../cartWidget/CartWidget.jsx'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {Link} from 'react-router-dom';

function NavBar() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <CartWidget/>
        <Navbar.Brand href="#home">Mahoraga Store</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link to='/categoria/manga' as={Link} >Manga</Nav.Link>
            <Nav.Link to='/categoria/figuras' as={Link} >Figuras</Nav.Link>
            <Nav.Link to='/categoria/merch' as={Link} >Merch</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
