import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from '../public/img-logo.png';
import "./NavBar.css"
import CartWidget from './CartWidget';
//import {BrowserRouter, Routes, Route} from 'react-router-dom';


const NavBar = () => {
  return (
    <Navbar expand="lg" bg="black" variant="dark">
      <Container>
        <Navbar.Brand>
          <img src={logo} alt='' className='logo'/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link>Inicio</Nav.Link>
            <Nav.Link>¿Quiénes somos?</Nav.Link>
            <Nav.Link>Contacto</Nav.Link>
            <NavDropdown title="Repuestos" id="basic-nav-dropdown" data-bs-theme="dark">
              <NavDropdown.Item>Bombas</NavDropdown.Item>
              <NavDropdown.Item>
                Inyectores
              </NavDropdown.Item>
              <NavDropdown.Item>Sensores</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <CartWidget></CartWidget>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar