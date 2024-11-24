import React from 'react';
import { useLocation } from 'react-router-dom';

function SearchResults() {
  const location = useLocation();
  const { houses = [], error = '' } = location.state || {};

  return (
    <div className="container mt-4">
      <h2>Search Results</h2>
      {error && <p className="text-danger">{error}</p>}
      <div className="row">
        {houses.length > 0 ? (
          houses.map((house) => (
            <div key={house._id} className="col-md-4 mb-4">
              <div className="card">
                <img src={house.imageUrl} className="card-img-top" alt="House" />
                <div className="card-body">
                  <h5 className="card-title">{house.city}</h5>
                  <p className="card-text">{house.description}</p>
                  <p className="card-text">
                    <strong>Price:</strong> ${house.price}
                  </p>
                  <p className="card-text">
                    <strong>ZIP Code:</strong> {house.zipCode}
                  </p>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p>No results found.</p>
        )}
      </div>
    </div>
  );
};

export default SearchResults;