import React from "react";
import ReactDOM from "react-dom/client";
import Navigation from "./Menu.jsx";
// @ts-ignore 
import Presentation from "./Content.jsx";
import Profilephoto from "./Sidebar.jsx";
import App from "./App.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    
    <Navigation/>
    <Profilephoto/>
    <Presentation/>
    <App/>
   
  </React.StrictMode>
);
