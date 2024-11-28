import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Adjust the path as needed
import { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
//import { useNavigate } from 'react-router-dom';
import Navibar from '../components/Navbar'; // Assuming Navbar component is created
import '../css/styleLogin.css'; 

function Register() {
  
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:3001/register', { name, email, password });
      alert('Usuario registrado exitosamente');
    } catch (err) {
      alert('Error al registrar usuario');
    }
  }; 


  return (
<>

    <Navibar />

    
    <div className="d-flex justify-content-center align-items-center bg-secondary vh-100 ">
      <div className="bg-white p-3 rounded w-25">
      <h2>New Account</h2>
      <form onSubmit={handleSubmit}>
      <div className="mb-3">
          <label htmlFor="email">
          <strong>Name</strong>
          </label>
         <input type="text"
          placeholder="Enter Name"
          name="name"
           className="form-control rounded-0"
           onChange={(e) => setName(e.target.value)}
           />
       </div>
       <div className="mb-3">
         <label htmlFor="email">
            <strong> Email </strong>
          </label>
         <input
            type="email"
            placeholder="Enter Email"
            name="email"
           className="form-control rounded-0"
           onChange={(e) => setEmail(e.target.value)}
         />
       </div>
   <div className="mb-3">
       <label htmlFor="email">
           <strong> Password</strong>
       </label>
     <input
        type="password"
        placeholder="Enter Password"
        name="password"
       className="form-control rounded-0"
       onChange={(e) => setPassword(e.target.value)}
      />
   </div>
     <button type = "submit" className = "btn btn-personal w-100 rounded-0">
        Register
     </button>  
     <p className= "my-1"> Already have an account?</p>
     <Link to= "/login" className = "btn btn-default border w-100 bg-light rounded-0 text-decoration-none">
        Log In
     </Link>
     <Link to= "/home" className = "btn btn-default border w-100 bg-light rounded-0 text-decoration-none my-1">
        Continue as guest
     </Link>
     </form>
   </div>
 </div>
  
</>
); 
}

export default Register;
