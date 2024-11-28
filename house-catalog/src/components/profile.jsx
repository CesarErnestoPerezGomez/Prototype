import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navibar from '../components/Navbar'; 
import Footer2 from '../components/Footer2';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

function Profile(){
  const [user, setUser] = useState(null); // Estado para almacenar los datos del usuario
  const navigate = useNavigate();

  // Simula la carga de datos del usuario (ajusta según tu lógica de autenticación)
  useEffect(() => {
    axios.get('http://localhost:3001/profile') // EndPoint para obtener los datos del perfil
      .then((response) => setUser(response.data)) // Guardar los datos del usuario en el estado
      .catch((err) => console.log(err));
  }, []);

  if (!user) {
    return <div>Cargando perfil...</div>; // Mostrar un mensaje mientras se cargan los datos
  }

  const handleViewSavedHouses = () => {
    navigate('/saved-houses'); // Redirige a la página de casas guardadas
  };
  
  
  return (
 <>
   <Navibar/>
   <div className="container my-5">
        <h2 className="text-center">Mi Perfil</h2>
        <div className="card mx-auto" style={{ maxWidth: '400px' }}>
          <div className="card-body text-center">
            <h3>{user.name}</h3>
            <p>{user.email}</p>
            <button
              className="btn btn-primary w-100"
              onClick={handleViewSavedHouses}
            >
              Ver Casas Guardadas
            </button>
          </div>
        </div>
      </div>

   <Footer2 />
 </>

    );
}

export default Profile;