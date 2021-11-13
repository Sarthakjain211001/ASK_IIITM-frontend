import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
 return(
     <div>
<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">ASK_IIITM</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="#">Blogs</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="opportunities">Opportunities</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="about">About Us</Link>
        </li>
        
        </ul>
      
    </div>
    <div class="d-flex flex-row-reverse bd-highlight" style={{"color" : "white"}}>
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link" to="myprofile">My Profile</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="#">LogOut</Link>
        </li>
      </ul>
</div>
  </div>
</nav>
</div>
    )  
}
