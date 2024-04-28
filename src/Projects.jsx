import React from "react";
import Navigation from "./Menu";
import videoControle from "./assets/videos/controle.mp4";
import videoTempo from "./assets/videos/tempo.mp4";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/NavBar.css";
import "./css/style.css";

function ExibitionProjects() {
  return (
    <div>
      <Navigation />
      <div className="box-project">
        <div className="box">
          <div className="img-container">
            <div className="icones-projects">
              <video className="video" controls>
                <source src={videoControle} type="video/mp4" />
              </video>
            </div>
          </div>
          <a href="https://charlexmorais.github.io/Projeto_controle_de_despesas">
            Controle de despesas
          </a>
        </div>

        <div className="box">
          <div className="img-container">
            <div className="icones-projects">
              <video className="video" controls>
                <source src={videoTempo} type="video/mp4" />
              </video>
            </div>
          </div>
          <a href="https://charlexmorais.github.io/tempo_hoje">Tempo hoje</a>
        </div>
      </div>
    </div>
  );
}

export default ExibitionProjects;
