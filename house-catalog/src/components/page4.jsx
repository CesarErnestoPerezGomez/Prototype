import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/stylePg4.css';
import Navibar from '../components/Navbar'; // Assuming Navbar component is created
import Footer2 from '../components/Footer2'; // Assuming Footer2 component is created
import CustomFooter from './Footer';

function Services() {
  return (
    <>
      <Navibar />

      <div className="container">
        <h1 className="text-center my-4">Remodeling Services</h1>
        <div className="row">
          <div className="col-md-4">
            <div className="card">
              <img src="/pics/carpintero.jpeg" alt="Carpentry Service" className="card-img-top" />
              <div className="card-body">
                <h2 className="card-title">Carpentry Service</h2>
                <p className="card-text">
                  If you need a carpenter for the house of your dreams, contact him{' '}
                  <a href="https://carpinteriasenmexico.com/jalisco/" target="_blank" rel="noopener noreferrer">
                    here
                  </a>
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card">
              <img src="/pics/pintor.png" alt="Painting Service" className="card-img-top" />
              <div className="card-body">
                <h2 className="card-title">Painter Service</h2>
                <p className="card-text">
                  If you need a painter for your dream house, contact him{' '}
                  <a href="https://www.cronoshare.com.mx/servicios/pintores" target="_blank" rel="noopener noreferrer">
                    here
                  </a>
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card">
              <img src="/pics/plomero.jpeg" alt="Plumbing Service" className="card-img-top" />
              <div className="card-body">
                <h2 className="card-title">Plumber Service</h2>
                <p className="card-text">
                  If you need a plumber for the house of your dreams, contact him{' '}
                  <a href="https://www.fontaneriasantacruz.com.mx/" target="_blank" rel="noopener noreferrer">
                    here
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <CustomFooter />
    </>
  );
}

export default Services;
