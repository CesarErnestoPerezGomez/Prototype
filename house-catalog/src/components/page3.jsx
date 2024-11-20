import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/styleCatalog.css'; // Adjust the path as needed
import Navbar from '../components/Navbar'; // Assuming Navbar component is created
import Footer2 from '../components/Footer2'; // Assuming Footer2 component is created

function Page3({ house }) {
  return (
    <>
      <Navbar />

      <div className="container my-5">
        <div className="row">
          <div className="col-md-8">
            <div className="card">
              <img src={house.imageurl} className="card-img-top" alt={`Imagen de ${house.name}`} />
              <div className="card-body">
                <h2 className="card-title">{house.name}</h2>
                <p className="card-text">
                  <strong>City:</strong> {house.city}
                </p>
                <p className="card-text">
                  <strong>Zip code:</strong> {house.zipCode}
                </p>
                <p className="card-text">
                  <strong>Price:</strong> ${house.price.toLocaleString()}
                </p>
                <p className="card-text">
                  <strong>Description:</strong> {house.description}
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card p-3">
              <h4 className="text-center">Contacto</h4>
              <p>¿Interesado en esta propiedad? ¡Déjanos tus datos y nos pondremos en contacto!</p>
              <form>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">
                    Nombre
                  </label>
                  <input type="text" className="form-control" id="name" placeholder="Tu nombre" />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    Correo electrónico
                  </label>
                  <input type="email" className="form-control" id="email" placeholder="ejemplo@correo.com" />
                </div>
                <div className="mb-3">
                  <label htmlFor="phone" className="form-label">
                    Teléfono
                  </label>
                  <input type="tel" className="form-control" id="phone" placeholder="123-456-7890" />
                </div>
                <button type="submit" className="btn btn-primary w-100">
                  Enviar
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="text-center mt-4">
          <a href="/catalog" className="btn btn-secondary">
            Regresar al Catálogo
          </a>
        </div>
      </div>

      <Footer2 />
    </>
  );
}

export default Page3;
