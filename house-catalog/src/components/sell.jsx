import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/styleCatalog.css'; // Adjust the path as needed
import Navbar from '../components/Navbar'; // Assuming Navbar component is created

function Sell() {
  return (
    <>
      <Navbar />

      <section className="d-flex flex-column justify-content-center align-items-center vh-100">
        <div className="text-center">
          <h1 className="display-4">¡En progreso!</h1>
          <p className="lead">Esta sección está en desarrollo. Estamos trabajando para ofrecerte esta funcionalidad pronto.</p>
          <p className="text-muted">Agradecemos tu paciencia y comprensión.</p>
          <a href="/catalog" className="btn btn-primary mt-3">Volver al Catálogo</a>
        </div>
      </section>
    </>
  );
}

export default Sell;
