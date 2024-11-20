import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/styleCatalog.css'; // Adjust the path as needed
import Navbar from '../components/Navbar'; // Assuming Navbar component is created
import Footer2 from '../components/Footer2'; // Assuming Footer2 component is created

function Page2({ houses, noHousesMessage }) {
  return ( 
    <>
      <Navbar/>

      <header className="header text-center">
        <h1>House Catalog</h1>
        <p>Here are the available houses</p>
      </header>

      <div className="container">
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

      <section className="catalog container mt-4">
        <div className="row">
          {noHousesMessage ? (
            <p>{noHousesMessage}</p>
          ) : (
            houses.map((house) => (
              <div key={house.zipCode} className="col house-item">
                <div className="card mb-4">
                  <div className="house-image">
                    <img
                      src={house.imageurl}
                      className="card-img-top"
                      alt={`${house.description}`}
                    />
                  </div>
                  <div className="card-body">
                    <h5 className="card-title">{house.name}</h5>
                    <p className="card-text">
                      <strong>City:</strong> {house.city}
                    </p>
                    <p className="card-text">
                      <strong>ZIP Code:</strong> {house.zipCode}
                    </p>
                    <p className="card-text">
                      <strong>Price:</strong> ${house.price.toLocaleString()}
                    </p>
                    <a href={`/house/${house.zipCode}`} className="btn btn-outline-secondary">
                      Ver Detalles
                    </a>

                    {/* Save and Share Buttons */}
                    <div className="d-flex justify-content-between">
                      <button className="btn btn-outline-success btn-sm save-btn">
                        <i className="fas fa-heart"></i> Save
                      </button>
                      <button className="btn btn-outline-secondary btn-sm share-btn">
                        <i className="fas fa-share-alt"></i> Share
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </section>

      <Footer2 />
    </>
  );
}

export default Page2;
