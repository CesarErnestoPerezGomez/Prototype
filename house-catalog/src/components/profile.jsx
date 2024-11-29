import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Profile = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await axios.get('http://localhost:3001/profile', { withCredentials: true });
        setUser(response.data.user);
      } catch (error) {
        alert(error.response.data.error);
      }
    };
    fetchProfile();
  }, []);

  const logout = async () => {
    try {
      const response = await axios.post('http://localhost:3001/logout', {}, { withCredentials: true });
      console.log(response.data);
      // Redirigir o hacer algo después del cierre de sesión
    } catch (error) {
      console.log("Error al cerrar sesión", error);
    }
  };

  if (!user) return <div>Loading...</div>;

  return (
    <div>
      <h2>Welcome, {user.name}</h2>
      <p>Email: {user.email}</p>
      // En tu componente, usa esta función
<button onClick={logout}>Cerrar sesión</button>
    </div>
    
  );
};

export default Profile;
