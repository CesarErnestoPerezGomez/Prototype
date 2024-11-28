import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/styleCatalog.css'; // Adjust this import based on your folder structure
import Navibar from '../components/Navbar'; // Assuming you’ll create a Navbar component
import Footer2 from '../components/Footer2'; // Assuming you’ll create a Footer2 component
 import { useEffect, useState } from 'react';
 import axios from 'axios';
 import { Link } from 'react-router-dom';

 function Catalog() {
  const [houses, setHouses] = useState([])
  
  useEffect(()=>{
     axios.get('http://localhost:3001/catalog')
     .then(houses=> setHouses(houses.data))
     .catch(err => console.log(err))
  },[])

  const handleSaveHouse = async (houseId) => {
    try {
      const response = await axios.post(
        'http://localhost:3001/save-house',
        { houseId },
        { withCredentials: true } // Necesario para enviar cookies al backend
      );
      alert(response.data.message); // Mostrar mensaje de éxito
    } catch (error) {
      console.error("Error saving house:", error);
      alert(error.response?.data?.error || "An error occurred");
    }
  };
  
  return (
      <>
    <Navibar/>
   
    <header className="text-center mt-5">
        <h1>Catalog</h1>
        <p> Available houses</p>
    </header>
    
    <div>
     
      <section className="catalog container mt-4">
        <div className="row">
          {houses.map((house) => (
            <div key={house._id} className="col-md-4 col-sm-6 mb-4 d-flex justify-content-center">
              <div className="card shadow-sm h-100" style={{ width: '100%' }}>
                <div className="house-image">
                  <img
                    src={house.imageUrl}
                    className="card-img-top"
                    alt={`${house.description}`}
                  />
                </div>
                <div className="card-body d-flex flex-column">
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
                  <Link to={`/houses/${house.zipCode}`} className="btn btn-primary">
                View Details
                  </Link>

                  {/* Botones de Save y Share */}
                  <div className="d-flex justify-content-between mt-2">
                  <button
                        className="btn btn-outline-success btn-sm save-btn"
                        onClick={() => handleSaveHouse(house._id)}
                      >
                        <i className="fas fa-heart"></i> Save
                      </button>
                    <button className="btn btn-outline-secondary btn-sm share-btn">
                      <i className="fas fa-share-alt"></i> Share
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
     
       
     
  
    <Footer2 />
    </>

    
  );

  
}

export default Catalog;

/*
<section className="catalog container mt-4">
<div className="row">
  {houses.map((house) => (
    <div key={house.zipCode} className="col-md-4 col-sm-6 mb-4 d-flex justify-content-center">
      <div className="card shadow-sm h-100" style={{ width: '100%' }}>
        <div className="house-image">
          <img
            src={house.imageurl}
            className="card-img-top"
            alt={`Image of ${house.description}`}
          />
        </div>
        <div className="card-body d-flex flex-column">
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
          <a href={`/house/${house.zipCode}`} className="btn btn-outline-secondary mt-auto">
            Ver Detalles
          </a>

          <div className="d-flex justify-content-between mt-2">
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
  ))}
</div>
</section>
*/