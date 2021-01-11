import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Logo from '../images/logo.png';

const NavbarMX = () => (
    <Navbar className="bg-mx" expand="lg" fixed="top" bg="dark" variant="dark" >
        <Navbar.Brand>
            <img src={Logo} alt="Logo" className="img-logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
                <Nav.Link href="#home">Inicio</Nav.Link>
            </Nav>
        </Navbar.Collapse>
    </Navbar>
);

export default NavbarMX;