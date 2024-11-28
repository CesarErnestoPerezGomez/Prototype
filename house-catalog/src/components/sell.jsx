import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/styleCatalog.css'; // Adjust the path as needed
import Navibar from '../components/Navbar'; // Assuming Navbar component is created

function Sell() {
  return (
    <>
      <Navibar />

      <section className="d-flex flex-column justify-content-center align-items-center vh-100">
        <div className="text-center">
          <h1 className="display-4">In progress!</h1>
          <p className="lead">
          This section is under development. We are working to bring this functionality to you soon.</p>
          <p className="text-muted">We appreciate your patience and understanding.</p>
          <a href="/catalog" className="btn btn-primary mt-3">Return to catalog</a>
        </div>
      </section>
    </>
  );
}

export default Sell;
