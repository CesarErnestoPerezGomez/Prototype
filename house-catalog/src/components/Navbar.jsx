import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '../css/styleCatalog.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../css/styleNavbar.css';

function Navibar() {
  return (
<>
    
<Navbar expand="lg" bg="white" className="shadow container-padre">
      <Container className="custom-container">
        {/* Left Menu Items */}
        <Nav className="me-auto">
          <Nav.Link as={Link} to="/buy-a-house">Buy</Nav.Link>
          <Nav.Link as={Link} to="/rent-a-house">Rent</Nav.Link>
          <Nav.Link as={Link} to="/sell">Sell</Nav.Link>
        </Nav>

        {/* Logo in the Center */}
        <Navbar.Brand as={Link} to="/home" className="mx-auto imagen-personal">
          <img src="/pics/Black White Simple House Logo.svg" alt="Logo" />
        </Navbar.Brand>

        {/* Right Menu Items */}
        <Nav className="ms-auto">
          <Nav.Link as={Link} to="/services">Services</Nav.Link>
          <Nav.Link as={Link} to="/help">Help</Nav.Link>
          <Nav.Link as={Link} to="/login">Login</Nav.Link>
          <Nav.Link as={Link} to="/myProfile">  <img
               src="/pics/person-circle.svg"
               alt="Profile"
              className="profile-img"
            /></Nav.Link>

        </Nav>
      </Container>
    </Navbar>
</>

  );
}

export default Navibar;
