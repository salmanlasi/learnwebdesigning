
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Html from './Components/Html';
import Css from './Components/Css';
import Javascript from './Components/Javascript';
import Footer from './Components/Footer';










function App() {

  

  

  return (
  <>
    
    
  

<Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Html />} />
        <Route path="/css" element={<Css />} />
        <Route path="/javascript" element={<Javascript />} />
        
      </Routes>
    </Router>
      
       
    <Footer/>
      
     


 



  </>
  );
}

export default App;
