import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';


function Navbar() {
  return (
<>
    
    <nav className="navbar navbar-expand-lg navbar-light bg-white shadow">
      <div className="container">
        {/* Left Menu Items */}
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link className="nav-link" to="/catalog">Buy</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/catalog">Rent</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/sell">Sell</Link>
          </li>
        </ul>

        {/* Logo in the Center */}
        <Link className="navbar-brand mx-auto" to="/home">
          <img src="/pics/Black White Simple House Logo.svg" alt="Logo" style={{ width: "100px" }} />
        </Link>

        {/* Right Menu Items */}
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <Link className="nav-link" to="/services">Services</Link>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/help">Help</a>
          </li>
        </ul>
      </div>
    </nav>
    </>
  );
}

export default Navbar;
