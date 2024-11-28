import React from 'react';
import { useLocation } from 'react-router-dom';
import Navibar from '../components/Navbar'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/styleCatalog.css'; 
import Footer2 from '../components/Footer2';
import { Link } from 'react-router-dom';




function SearchResults() {
  const location = useLocation();
  const { houses = [], error = '' } = location.state || {};

  return (
   <>
   
   <Navibar/>
   
   <header className="text-center mt-5">
       <h1> <Link className="nav-link" to="/catalog">Catalog</Link></h1>
       <p> Available houses </p>
       {error && <p className="text-danger my-5">{error}</p>}
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
   </div>
    


   <Footer2 />

   
   
   </>
  );
};

export default SearchResults;