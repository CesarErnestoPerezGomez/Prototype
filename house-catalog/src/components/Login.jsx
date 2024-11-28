import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
//import { useNavigate } from 'react-router-dom';
import '../css/styleLogin.css'; 
import Navibar from '../components/Navbar'; // Assuming Navbar component is created


const Login = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3001/login', { email, password }, { withCredentials: true });
      onLogin(response.data.user); // Actualiza el estado de sesión en el padre
    } catch (err) {
      alert('Error al iniciar sesión');
    }
  };
    return (
<>
      <Navibar />

      <div className="d-flex justify-content-center align-items-center bg-secondary vh-100 ">
      <div className="bg-white p-3 rounded w-25">
      <h2>LogIn</h2>
      <form onSubmit={handleSubmit}>
       <div className="mb-3">
         <label htmlFor="email">
            <strong> Email </strong>
          </label>
         <input
            type="email"
            placeholder="Enter Email"
            name="email"
            value={email}
           className="form-control rounded-0"
           onChange={(e) => setEmail(e.target.value)}
           required
         />
       </div>
   <div className="mb-3">
       <label htmlFor="email">
           <strong>Password</strong>
       </label>
     <input
        type="password"
        placeholder="Enter Password"
        name="password"
        value={password}
       className="form-control rounded-0"
       onChange={(e) => setPassword(e.target.value)}
       required
      />
   </div>
     <button type = "submit" className = "btn btn-personal w-100 rounded-0">
        Login
     </button>  
     <p className= "my-1"> Create new account</p>
     <Link to= "/register" className = "btn btn-default border w-100 bg-light rounded-0 text-decoration-none">
     Register
     </Link>
     <Link to= "/home" className = "btn btn-default border w-100 bg-light rounded-0 text-decoration-none my-1">
        Continue as guest
     </Link>
     </form>
   </div>
 </div>
  </>  )

}


export default Login;