import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/styleHome.css'; // Adjust the path as needed
import Navibar from '../components/Navbar'; // Assuming Navbar component is created
import CustomFooter from '../components/Footer'; // Assuming Footer component is created
import { Carousel } from 'react-bootstrap';
import ZillowAudience from './cards'; // Assuming ZillowAudience component is created
import SearchBar from '../components/searchBar';

function Home() {

  
  return (
    <>
    <Navibar />

{/* Header Section */}
<header className="header d-flex flex-column justify-content-center align-items-center text-center">
      <div className="container">
        <h1 className="display-4 text-white font-weight-bold">Homes. Future. Sustainability.</h1>
        <div className="input-group mt-4">
        <SearchBar />
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
            <a href="/buy-a-house" className="btn btn-primary">See homes</a>
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
            <a href="/rent-a-house" className="btn btn-primary">Find rentals here</a>
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
<ZillowAudience />
<CustomFooter />
    </>
  );
}

export default Home;
