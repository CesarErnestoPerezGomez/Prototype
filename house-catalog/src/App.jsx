import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';
// import { useEffect, useState } from 'react'; 
// import axios from 'axios';
import Login from './components/Login';
import Register from './components/Register';
 import Home from './components/home';
 
 /*
import Catalog from './components/catalog';
import Login from './components/login';
import Page2 from './components/page2';
import Page3 from './components/page3';
import Page4 from './components/page4';
import Sell from './components/sell';
import Navbar from './components/Navbar'; 
import Footer2 from './components/Footer2';  */


function App() {
 
 
 /*  const [houses, setHouses] = useState([])
  useEffect(()=> {
    axios.get('http://localhost:3001/catalog')
    .then(houses => setHouses(houses.data))
    .catch(err => console.log("nada nadita") )
  }, [])

*/


  return (
   
 <BrowserRouter>
   <Routes>
    
     <Route path = '/register' element = {<Register/>}> </Route>
     <Route path = '/login' element = {<Login/>}> </Route>
     <Route path = '/home' element = {<Home/>}> </Route>
   </Routes>
 </BrowserRouter>
  
  
    /*  houses.map( houses => {
      <tr>
        <td>{houses.address}</td>
        <td>{houses.zipCode}</td>
        <td>{houses.price}</td>
      </tr>
    })

*/

    /*
   <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/catalog" element={<Catalog/>} />
        <Route path="/login" element={<Login />} />
        <Route path="/page2" element={<Sell/>} />
        <Route path="/page3" element={<Page3 />} />
        <Route path="/page4" element={<Page4 />} />
        <Route path="/sell" element={<Page2 />} />
      </Routes>
      <Footer2 />
    </Router>
    */
  );
}


export default App;
