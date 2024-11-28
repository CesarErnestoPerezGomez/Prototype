import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/styleHome.css';
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function SearchBar(){
    
    const [address, setAddress] = useState('');
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
            console.log('No houses found at:', address);
            navigate('/searchResults', { state: { houses: [], error: `No houses found at: "${address}"` } }); // Redirige con error
          } else {
            console.error('Error fetching data:', error);
          }
        });
    };

    return (

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
              <i className="fas fa-search" aria-hidden="true"></i>
              </button>
            </div>
          </form>

    )
}

export default SearchBar;