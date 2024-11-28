import React, { useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';  // Para la redirección

const Logout = () => {
  const navigate = useNavigate(); // Usamos React Router para redirigir

  useEffect(() => {
    const logoutUser = async () => {
      try {
        // Enviar una solicitud de logout al servidor
        await axios.post('http://localhost:3001/logout', {}, { withCredentials: true });
        
        // Redirigir al usuario a la página de inicio de sesión
        navigate('/login');
      } catch (error) {
        console.error('Logout error:', error);
        // Puedes manejar el error mostrando un mensaje o redirigiendo
      }
    };

    logoutUser(); // Llamamos a la función de logout cuando se monte el componente
  }, [navigate]); // Dependemos de 'navigate' para que sea llamado correctamente

  return <div>Logging out...</div>; // Puedes mostrar un mensaje mientras se procesa el logout
};

export default Logout;
