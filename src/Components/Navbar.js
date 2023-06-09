import React from "react";
import { Link } from "react-router-dom";

function Navbar(){
    return(
        <nav className="navbar bg-dark navbar-expand-lg navbar-dark fixed-top" data-bs-theme="dark">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">Navbar</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/addrate">Add Rates</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>  
    )
}

export default Navbar;