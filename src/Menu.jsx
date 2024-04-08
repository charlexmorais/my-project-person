import React from "react";
import { Link } from "react-router-dom"; // Importe o componente Link do React Router
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/style.css";

function Navigation() {
  return (
    <div>
      <header>
        <nav className="headerfield">
          <ul className="nav justify-content-end">
            <li className="nav-item">
              {/* Use o componente Link para criar um link para a página Home */}
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              {/* Use o componente Link para criar um link para a página About */}
              <Link className="nav-link" to="/about">
                About
              </Link>
            </li>
            <li className="nav-item">
              {/* Use o componente Link para criar um link para a página Contact */}
              <Link className="nav-link" to="/contact">
                Contact
              </Link>
            </li>
            <li className="nav-item">
              {/* Use o componente Link para criar um link para a página Projects */}
              <Link className="nav-link" to="/projects">
                Projects
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
}

export default Navigation;
