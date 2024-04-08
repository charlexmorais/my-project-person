import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/style.css"

function Navigation() {
  return (
    <div>
      <header>
        <nav className="headerfield"> 
          <ul class="nav justify-content-end ">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">
                Home
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                About
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Contact
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Projects
              </a>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
}

export default Navigation;
