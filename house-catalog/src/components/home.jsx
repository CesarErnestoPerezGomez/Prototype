import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/styleHome.css'; // Adjust the path as needed
import Navbar from '../components/Navbar'; // Assuming Navbar component is created
import Footer from '../components/Footer'; // Assuming Footer component is created
import { Carousel } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useState } from 'react';

function Home() {

  const [address, setAddress] = useState(''); // Estado para el input de búsqueda
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();

    axios.get('http://localhost:3001/search', { params: { address } })
      .then((response) => {
        console.log(response.data); // Imprime los resultados en consola
        navigate('/searchResults', { state: { houses: response.data } }); // Redirige con los datos encontrados
      })
      .catch((error) => {
        if (error.response && error.response.status === 404) {
          console.log('No houses found.');
          navigate('/searchResults', { state: { houses: [], error: 'No houses found.' } }); // Redirige con error
        } else {
          console.error('Error fetching data:', error);
        }
      });
  };

  return (
    <>
    <Navbar />

{/* Header Section */}
<header className="header d-flex flex-column justify-content-center align-items-center text-center">
      <div className="container">
        <h1 className="display-4 text-white font-weight-bold">Homes. Future. Sustainability.</h1>
        <div className="input-group mt-4">
          <form onSubmit={handleSearch} className="d-flex w-100">
            <input
              type="text"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              name="address"
              className="form-control"
              placeholder="Enter a city or ZIP code (Zapopan, 43243)"
              aria-label="Search Address"
              aria-describedby="search-button"
              required
            />
            <div className="input-group-append">
              <button type="submit" className="btn btn-secondary" id="search-button">
                <i className="fa fa-search" aria-hidden="true"></i>
              </button>
            </div>
          </form>
        </div>
      </div>
    </header>

{/* Services Section */}
<section className="services-section my-5">
  <div className="container">
    <div className="row">
      <div className="col-md-4">
        <div className="card mb-4">
          <img src="/pics/Leslie_Living-Room-Hero.jpg.webp" className="card-img-top" alt="Buy House" />
          <div className="card-body">
            <h5 className="card-title">Buy House</h5>
            <p className="card-text">We can help find the house of your dreams.</p>
            <a href="/catalog" className="btn btn-primary">See homes</a>
          </div>
        </div>
      </div>
      <div className="col-md-4">
        <div className="card mb-4">
          <img src="/pics/MED-Park-2.jpg.webp" className="card-img-top" alt="Sell House" />
          <div className="card-body">
            <h5 className="card-title">Sell House</h5>
            <p className="card-text">We can help you navigate to a successful sale.</p>
            <a href="/sell" className="btn btn-primary">See your options</a>
          </div>
        </div>
      </div>
      <div className="col-md-4">
        <div className="card mb-4">
          <img src="/pics/Tomei_Bleeker_1.jpg.webp" className="card-img-top" alt="Rent a House" />
          <div className="card-body">
            <h5 className="card-title">Rent a House</h5>
            <p className="card-text">Find the perfect home to rent at the best price.</p>
            <a href="/catalog" className="btn btn-primary">Find rentals here</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

{/* Carousel Section */}
<section className="carousel-section my-5">
  <div className="container">
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/pics/0ca922a93bb9c23455377abf6584c416-cc_ft_1536.webp"
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/pics/20dfcc988441a7e3cacf79856e29ecba-cc_ft_1536.webp"
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/pics/fe47ba1a96203b523a04bba21fa88809-cc_ft_1536.webp"
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  </div>
</section>

<Footer />
    </>
  );
}

export default Home;
