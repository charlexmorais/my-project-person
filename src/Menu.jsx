import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavLink } from "react-router-dom";
import "./css/style.css"; // Importe seu arquivo CSS aqui

function Navigation() {
  return (
    <header>
      <nav className="headerfield">
        <ul className="nav justify-content-end">
          <li className="nav-item">
            <NavLink exact="true" to="/" className="nav-link">
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/about" className="nav-link">
              About
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/contacts" className="nav-link">
              Contact
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/projects" className="nav-link">
              Projects
            </NavLink>
          </li>
        </ul>
      </nav>
      <div className="banner">
        <h1>Welcome to My Portfolio</h1>
        <p>Explore the projects I showcase with passion and dedication.</p>
        <p>Hello, I'm Charle</p>
        <div>
          <a
            href="https://drive.usercontent.google.com/u/0/uc?id=1Paipqp7_O7UqvRQIaysxwFARf_Rus5kJ&export=download"
            className="btn btn-dark"
            target="_blank"
            rel="noopener noreferrer"
          >
            Download CV
          </a>
          
        </div>
       </div>

      <footer>© 2024 Charle Morais. All Rights Reserved.</footer>
    </header>
  );
}

export default Navigation;
