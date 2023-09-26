import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from '../public/img-logo.png';
import "./NavBar.css"


const NavBar = () => {
  return (
    <Navbar expand="lg" bg="black" variant="dark">
      <Container>
        <Navbar.Brand href="inicio">
          <img src={logo} alt='' className='logo'/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="inicio">Inicio</Nav.Link>
            <Nav.Link href="nosotros">¿Quiénes somos?</Nav.Link>
            <Nav.Link href="contacto">Contacto</Nav.Link>
            <NavDropdown title="Repuestos" id="basic-nav-dropdown" data-bs-theme="dark">
              <NavDropdown.Item href="bombas">Bombas</NavDropdown.Item>
              <NavDropdown.Item href="inyectores">
                Inyectores
              </NavDropdown.Item>
              <NavDropdown.Item href="sensores">Sensores</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          
          <div className="navbar-text cart-img">
            <i className="bi bi-cart2"></i> {/* Icono de carrito de compras */}
          </div>
        </Navbar.Collapse>
        
      </Container>
    </Navbar>
  );
}

export default NavBar