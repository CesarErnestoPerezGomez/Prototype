import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/styleCatalog.css'; // Adjust the path as needed
import Navibar from '../components/Navbar'; // Assuming Navbar component is created
import Footer2 from '../components/Footer2'; // Assuming Footer2 component is created
import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import axios from "axios";
 import { useNavigate } from 'react-router-dom';

function HouseDetails() {
  const { zipCode } = useParams(); // Captura el ID de la URL
  const [house, setHouse] = useState(null);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setphoneNumber] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`http://localhost:3001/houses/${zipCode}`)
      .then((response) => setHouse(response.data), zipCode)
      .catch((err) => console.log(err));
  }, [zipCode]);

  if (!house) {
    return <div>Cargando...</div>;
  }


  const handleForm = async (e) => {
    e.preventDefault()
    await axios.post('http://localhost:3001/contacts', {name, email, phoneNumber})
    .then(result => {console.log(result)
      alert('Contact information saved successfully!');
    })
    .catch(err => console.log(err))
    
  } 

  return (
    <>
      <Navibar />
      <div className="container my-5">
        <div className="row">
          <div className="col-md-8">
            <div className="card">
              <img src={house.imageUrl} className="card-img-top" alt={` ${house.name}`} />
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
              <h4 className="text-center">Contact</h4>
              <p>Interested in this property? Leave us your information and we will get in touch!</p>
              <form onSubmit={handleForm}>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">
                    Name
                  </label>
                  <input type="text" className="form-control" id="name" placeholder="Tu nombre" 
                  onChange={(e) => setName(e.target.value)} required/>
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    Email
                  </label>
                  <input type="email" className="form-control" id="email" placeholder="ejemplo@correo.com"
                    onChange={(e) => setEmail(e.target.value)} required/>
                </div>
                <div className="mb-3">
                  <label htmlFor="phone" className="form-label">
                    Phone
                  </label>
                  <input type="tel" className="form-control" id="phone" placeholder="123-456-7890"
                  onChange={(e) => setphoneNumber(e.target.value)} required />
                </div>
                <button type="submit" className="btn btn-primary w-100">
                  Send
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="text-center mt-4">
        <button onClick={() => navigate('/catalog')} className="btn btn-secondary">
            Return to Catalog
          </button>
        </div>
      </div>
      <Footer2 />
    </>
  );
};

export default HouseDetails;