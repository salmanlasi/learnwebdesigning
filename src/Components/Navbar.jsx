import React from 'react'
import {Link} from 'react-router-dom';


export default function Navbar() {
  return (
    <div> 
      
      
  {/* Navbar start */}

<nav className="navbar navbar-expand-lg navbar-light bg-light">
  
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <a classNameName="navbar-brand " id='bsw' >Basic WebDesigning</a>

  

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
    <li classNameName="nav-item">
          <a classNameName="nav-link active " aria-current="page" id='a' href="/">HTML</a>
        </li>
        <li classNameName="nav-item">
          <a classNameName="nav-link active " aria-current="page" id='a' href="/about">CSS</a>
        </li>
        <li classNameName="nav-item">
          <a classNameName="nav-link active " aria-current="page" id='a' href="/services">JAVASCRIPT</a>
        </li>
      
     </ul>
  </div>
</nav>

{/* Navbar end */}



    </div>
  )
}
