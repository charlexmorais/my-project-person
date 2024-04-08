import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import photoperfil from "./assets/cx.jpg";


function Profilephoto (){
return(
    <div>
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
    </div>
)
}
export default Profilephoto