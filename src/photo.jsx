import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import "./css/style.css";
import photoperfil from"./assets/cx.jpg"
import Navigation from "./Menu";


function Photoperfil() {
  return (
    <header>
      <nav className="headerfield">
        <Navigation/>

        <aside>
          <div>
            <a>
              <img
                src={photoperfil}
                alt="photo"
                className="my-photo"
                title="my-photo"
                style={{ marginRight: "10px" , marginTop:"50px"}}
              />
            </a>
          </div>
        </aside>
      </nav>
      
    </header>
  );
}

export default Photoperfil;