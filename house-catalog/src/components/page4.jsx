import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/stylePg4.css'; // Adjust the path as needed
import Navbar from '../components/Navbar'; // Assuming Navbar component is created
import Footer2 from '../components/Footer2'; // Assuming Footer2 component is created

function Page4() {
  return (
    <>
      <Navbar />

      <div className="container">
        <h1>Remodeling Services</h1>

        <div className="service">
          <div className="image-placeholder">
            <img src="/pics/carpintero.jpeg" alt="Carpentry Service" className="image1" />
          </div>
          <h2>Carpentry</h2>
          <p>
            If you need a carpenter for the house of your dreams, contact him{' '}
            <a href="https://carpinteriasenmexico.com/jalisco/" target="_blank" rel="noopener noreferrer">
              here
            </a>
          </p>
        </div>

        <div className="service">
          <div className="image-placeholder">
            <img src="/pics/pintor.png" alt="Painting Service" className="image2" />
          </div>
          <h2>Painter</h2>
          <p>
            If you need a painter for your dream house, contact him{' '}
            <a href="https://www.cronoshare.com.mx/servicios/pintores" target="_blank" rel="noopener noreferrer">
              here
            </a>
          </p>
        </div>

        <div className="service">
          <div className="image-placeholder">
            <img src="/pics/plomero.jpeg" alt="Plumbing Service" className="image3" />
          </div>
          <h2>Plumber</h2>
          <p>
            If you need a plumber for the house of your dreams, contact him{' '}
            <a href="https://www.fontaneriasantacruz.com.mx/" target="_blank" rel="noopener noreferrer">
              here
            </a>
          </p>
        </div>
      </div>

      <Footer2 />
    </>
  );
}

export default Page4;
