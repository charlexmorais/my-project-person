import React from "react";
import ReactDOM from "react-dom/client";
import Navigation from "./Menu.jsx";
// @ts-ignore 
import Presentation from "./Content.jsx";
import Profilephoto from "./Sidebar.jsx";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    
    <Navigation/>
    <Profilephoto/>
    <Presentation/>
   
  </React.StrictMode>
);
