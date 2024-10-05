// src/Navbar.js
import React from 'react';
import Navbar from './navbar.js';
import Header from './Header.js';
import About from './about.js';
import Contact from './contact.js';
import Footer from './footer.js';
//import Resume from './resume.js';
//import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import Recent from './recentworks.js';
const App = () => {
  return (
    <div>
      
        <Navbar />
        <Header />
      <About />
      <Contact />
      <Footer/> 
      <Recent/>
      
     
    </div>
  );
}

export default App;
