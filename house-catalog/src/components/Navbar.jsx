import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
//import 'bootstrap-icons/font/bootstrap-icons.css';
import '../css/styleCatalog.css';
import '../css/styleNavbar.css';
import { Navbar, Container, Nav, Dropdown } from 'react-bootstrap';
import 'bootstrap-icons/font/bootstrap-icons.css';


function Navibar() {
  return (
    <>
            <Navbar expand="lg" bg="white" className="shadow container-padre">
        <Container className="custom-container">
          {/* Dropdown Menu */}
          <Dropdown>
            <Dropdown.Toggle
              variant="white"
              id="dropdown-basic"
              className="shadow-none border-0"
            >
              <i className="bi bi-list" style={{ fontSize: "1.5rem" }}></i> {/* Icon only */}
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item as={Link} to="/buy-a-house">
                Buy
              </Dropdown.Item>
              <Dropdown.Item as={Link} to="/rent-a-house">
                Rent
              </Dropdown.Item>
              <Dropdown.Item as={Link} to="/sell">
                Sell
              </Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item as={Link} to="/services">
                Services
              </Dropdown.Item>
              <Dropdown.Item as={Link} to="/help">
                Help
              </Dropdown.Item>
              <Dropdown.Item as={Link} to="/login">
                Login
                </Dropdown.Item>
                <Dropdown.Item as={Link} to="/catalog">
                Catalog
              </Dropdown.Item>
              <Dropdown.Item as={Link} to="/myProfile">
                <img
                  src="/pics/person-circle.svg"
                  alt="Profile"
                  className="profile-img"
                />
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

          {/* Logo in the Center */}
          <Navbar.Brand as={Link} to="/home" className="mx-auto imagen-personal">
            <img
              src="/pics/Screenshot 2024-11-27 at 10.18.18 p.m..png"
              alt="Logo"
            />
          </Navbar.Brand>
        </Container>
      </Navbar>
    </>
  );
}

export default Navibar;
