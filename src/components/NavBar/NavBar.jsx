import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../../public/img-logo.png';
import "./NavBar.css"
import CartWidget from '../CartWidget';
import { Link } from 'react-router-dom' //, NavLink


const NavBar = () => {
  return (
    <Navbar expand="lg" bg="black" variant="dark">
      <Container>
        <Navbar.Brand as={Link} to="/">
          <img src={logo} alt='' className='logo'/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/category/inyectores">Inyectores</Nav.Link>
            <Nav.Link as={Link} to="/category/bombas">Bombas</Nav.Link>
            <Nav.Link as={Link} to="/category/sensores">Sensores</Nav.Link>
          </Nav>
          <CartWidget></CartWidget>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar