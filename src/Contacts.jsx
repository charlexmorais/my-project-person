import React from "react";
import Navigation from "./Menu"; // Importe o componente Navigation
import email from "./assets/email.jpg";
import github from "./assets/github.png";
import linkedin from "./assets/linkedin.png";
import imgwhatsapp from "./assets/whatsapp.png";
import "../src/css/NavBar.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/style.css"; // Importe seu arquivo CSS aqui
import Photoperfil from "./assets/cx.jpg";

function ExibitionContacts() {
  return (
    <div>
      <Navigation />
      <header className="content">
        <h1>Hello! Nice to meet you, I'm Charle Xavier!</h1>
        <h2> I'm a full stack developer.</h2>
        <h3>contact</h3>
        <div className="img-icones">
          <a href="mailto:charlexavier100@gmail.com" className="nav-link">
            <img
              src={email}
              alt="icone-email"
              className="meu-email"
              title="email"
              style={{ marginRight: "10px" }}
            />
          </a>
          <a href="https://github.com/charlexmorais" className="nav-link">
            <img
              src={github}
              alt="icone-github"
              className="Meu-github"
              title="github"
              style={{ marginRight: "10px" }}
            />
          </a>
          <a
            href="https://www.linkedin.com/in/charlemorais-developer-full-stack/"
            className="nav-link"
          >
            <img
              src={linkedin}
              alt="icone-linkedin"
              className="meu-linkedin"
              title="linkedin"
            />
          </a>
          <a href="https://wa.me/5534996880027" className="nav-link">
            <img
              src={imgwhatsapp}
              alt="icone-whatsapp"
              className="img-whatsapp"
              title="whatsapp"
              style={{ marginRight: "10px" }}
            />
          </a>
         
        </div>
      </header>
      
    </div>
    
  );
}

export default ExibitionContacts;
