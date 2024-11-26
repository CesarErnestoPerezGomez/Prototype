import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '../css/styleCatalog.css';

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
          <img src="/pics/Black White Simple House Logo.svg" alt="Logo"  />
        </Link>

         {/* Right Menu Items */}
       <ul className="navbar-nav ml-auto">
         <li className="nav-item">
           <Link className="nav-link" to="/services">Services</Link>
         </li>
         <li className="nav-item">
            <Link className="nav-link" to="/help">Help</Link>
         </li>
         <li className="nav-item dropdown">
         <button
           className="nav-link dropdown-toggle btn btn-link"
           id="navbarDropdown"
           data-bs-toggle="dropdown"
         aria-expanded="false">  
          <img
          src="/pics/person-circle.svg"
          alt="Profile"
          style={{ width: "32px", height: "32px", marginRight: "8px", borderRadius: "50%" }}/>
         </button>
         <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
             <li><Link className="dropdown-item" to="/myProfile">My account</Link></li>
             <li><Link className="dropdown-item" to="/login">Login</Link></li>
             <li><Link className="dropdown-item" to="/">Saved</Link></li>
             <li><Link className="dropdown-item" to="/register">New account</Link></li>
           </ul>
         </li>
     </ul>
      </div>
    </nav>
    </>
  );
}

export default Navbar;
