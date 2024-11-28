import React from 'react';
//import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';
// import { useEffect, useState } from 'react'; 
// import axios from 'axios';
import Login from './components/Login';
import Register from './components/Register';
 import Home from './components/home';
 import Services from './components/page4';
 import Sell from './components/sell';
 import Catalog from './components/catalog';
 import HouseDetails from './components/page3';
 import SearchResults from './components/searchResults';
 import Profile from './components/profile';
 import Help from './components/help';
 import Buy from './components/buy';
 import Rent from './components/rent';


 /*

import Login from './components/login';
import Page2 from './components/page2';
import Page3 from './components/page3';


import Navbar from './components/Navbar'; 
import Footer2 from './components/Footer2';  */


function App() {


  return (
   
 <BrowserRouter>
   <Routes>
     <Route path = '/register' element = {<Register/>}> </Route>
     <Route path = '/login' element = {<Login/>}> </Route>
     <Route path = '/home' element = {<Home/>}> </Route>
     <Route path = '/' element = {<Home/>}> </Route>
     <Route path='/services' element={<Services />} />
     <Route path='/sell' element={<Sell />} />
     <Route path='/catalog' element={<Catalog/>} />
     <Route path='/buy-a-house' element={<Buy/>} />
     <Route path='/rent-a-house' element={<Rent/>} />
     <Route path='/houses/:zipCode' element={<HouseDetails />} />
     <Route path='/searchResults' element={<SearchResults />} /> 
     <Route path='/myProfile' element={<Profile/>} /> 
     <Route path='/help' element={<Help/>} /> 
    

  

   </Routes>
 </BrowserRouter>
  
  
    

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
