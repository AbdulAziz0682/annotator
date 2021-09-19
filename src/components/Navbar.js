import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <div className="main-container">
            <nav className="navbar navbar-expand-md navigation">
          <div className="container-fluid">    
            <a className="navbar-brand" href="#"><img src="images/logo.png" /></a>
            {/* Toggler/collapsibe Button */}
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
              <span className="fa fa-bars" />
            </button>
            {/* Navbar links */}
            <div className="collapse navbar-collapse" id="collapsibleNavbar">
              <ul className="navbar-nav">
              <li className="nav-item">
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" id="navbardrop" data-toggle="dropdown">
                    Profile
                </a>
                <div class="dropdown-menu">
                <Link className="nav-link" to="/account">Account</Link>
                    <a class="dropdown-item" href="#">Logout</a>
                </div>
                </li>
              </li>
                </ul>
            </div>
         </div>
     </nav>
        </div>
    )
}

export default Navbar
