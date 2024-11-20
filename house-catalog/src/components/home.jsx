import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/styleHome.css'; // Adjust the path as needed
import Navbar from '../components/Navbar'; // Assuming Navbar component is created
import Footer from '../components/Footer'; // Assuming Footer component is created

function Home() {
  return (
    <>
      
      <Navbar/>
      
      <header className="header d-flex flex-column justify-content-center align-items-center text-center">
        <div className="container">
          <h1 className="display-4 text-white font-weight-bold">Homes. Future. Sustainability.</h1>
          <div className="input-group mt-4">
            <form action="/search" method="get" className="d-flex w-100">
              <input
                type="text"
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
                <img src="/pics/MED-Park-2.jpg.webp" className="card-img-top" alt="Sell House Image" />
                <div className="card-body">
                  <h5 className="card-title">Sell House</h5>
                  <p className="card-text">We can help you navigate to a successful sale.</p>
                  <a href="/sell" className="btn btn-primary">See your options</a>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card mb-4">
                <img src="/pics/Tomei_Bleeker_1.jpg.webp" className="card-img-top" alt="Rent a House Image" />
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
          <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
            <ol className="carousel-indicators">
              <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
              <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
              <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
            </ol>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img
                  className="d-block w-100"
                  src="/pics/0ca922a93bb9c23455377abf6584c416-cc_ft_1536.webp"
                  alt="First slide"
                />
              </div>
              <div className="carousel-item">
                <img
                  className="d-block w-100"
                  src="/pics/20dfcc988441a7e3cacf79856e29ecba-cc_ft_1536.webp"
                  alt="Second slide"
                />
              </div>
              <div className="carousel-item">
                <img
                  className="d-block w-100"
                  src="/pics/fe47ba1a96203b523a04bba21fa88809-cc_ft_1536.webp"
                  alt="Third slide"
                />
              </div>
            </div>
            <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
              <span className="carousel-control-prev-icon bg-dark rounded-circle p-3" aria-hidden="true"></span>
              <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
              <span className="carousel-control-next-icon bg-dark rounded-circle p-3" aria-hidden="true"></span>
              <span className="sr-only">Next</span>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default Home;
