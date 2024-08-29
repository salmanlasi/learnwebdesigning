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
          <Link classNameName="nav-link active " aria-current="page" id='a' to="/">HTML</Link>
        </li>
        <li classNameName="nav-item">
          <Link classNameName="nav-link active " aria-current="page" id='a' to="/css">CSS</Link>
        </li>
        <li classNameName="nav-item">
          <Link classNameName="nav-link active " aria-current="page" id='a' to="/javascript">JAVASCRIPT</Link>
        </li>
      
     </ul>
  </div>
</nav>

{/* Navbar end */}



    </div>
  )
}






