import React from 'react';
import "../styles/navbar.css"

const Navbar = () => {
  return (
    <header>
      <nav className="navbar">
        <a href="#home" className="nav-branding">
          <img src="" alt="logo" className="logo" />
          <h3>
            <span className="pri">V</span>ISIBLE<span className="pri">V</span>OICE.AI
          </h3>
        </a>
        <ul className="nav-menu">
          <li className="nav-item">
            <a href="#home" className="nav-link">
              HOME
            </a>
          </li>
          <li className="nav-item">
            <a href="#about" className="nav-link">
              ABOUT
            </a>
          </li>
          <li className="nav-item">
            <a href="#contact" className="nav-link">
              CONTACT
            </a>
          </li>
        </ul>
        <div className="hamburger">
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
