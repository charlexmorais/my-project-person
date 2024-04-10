import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/style.css";
import photoperfil from "./assets/cx.jpg";
import Profilephoto from "./Sidebar";
import Presentation from "./Content"; 

function Navigation() {
  return (
    <header>
      <nav className="headerfield">
        <ul className="nav justify-content-end">
          <li className="nav-item">
            <a className="nav-link" href="/">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/about">
              About
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/contacts">
              Contact
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/projects">
              Projects
            </a>
          </li>
        </ul>

        <aside>
          <div>
            <a>
              <img
                src={photoperfil}
                alt="photo"
                className="my-photo"
                title="my-photo"
                style={{ marginRight: "10px" }}
              />
            </a>
          </div>
        </aside>
      </nav>
      
      <Presentation />
      
      <Profilephoto />
    </header>
  );
}

export default Navigation;
