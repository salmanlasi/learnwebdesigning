
import './App.css';
import React from 'react';
import Navbar from './Components/Navbar';
import { BrowserRouter as Router, Route, Routes,} from 'react-router-dom';
import Html from './Components/Html';
import Css from './Components/Css';
import Javascript from './Components/Javascript';
import Footer from './Components/Footer';










function App() {

  

  

  return (
  <>
    
    
    
    <Navbar/>
    
      <Router>
        <Routes>
          <Route path='/' element={<Html/>}/>
          
          <Route path='/about' element={<Css/>}/>
          <Route path='/services' element={<Javascript/>}/>
          
          
       
      

        </Routes>
      </Router>
       
    <Footer/>
      
     


 



  </>
  );
}

export default App;
