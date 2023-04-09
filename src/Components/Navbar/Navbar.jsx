import React from "react";
import {NavLink , Link } from "react-router-dom";
import  "../../App.css";


const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light bg-body-tertiary">
  <div className="container-fluid">
  <Link to="/" className="fs-3 ubuntu navbar-brand ">
        Rick & Morty <span className="text-success">App</span>
      </Link>
    <button 
    className="navbar-toggler" 
    type="button" 
    data-bs-toggle="collapse" 
    data-bs-target="#navbarNavAltMarkup" 
    aria-controls="navbarNavAltMarkup" 
    aria-expanded="false" 
    aria-label="Toggle navigation">

     <style jsx="true" >
        {`
         button[ aria-expanded="false"]> .close{
           display:none;
         }

         button[ aria-expanded="true"]> .open{
          display:none;
        }

        `}

      </style>

      {/* <span className="navbar-toggler-icon"></span> */}
      <i className="bi bi-list open fw-bold text-dark"></i>
      <i className="bi bi-x close fw-bold text-dark"></i>

    </button>

    <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">

      <div className="navbar-nav fs-5">
        
        <NavLink activeclassname="active" to ="/" className="nav-link" >Characters</NavLink>
        <NavLink to ="/episodes" className="nav-link" >Episodes</NavLink>
        <NavLink to ="/location" className="nav-link" >Location</NavLink>
       
      </div>
    </div>
  </div>
</nav>
  )
}

export default Navbar