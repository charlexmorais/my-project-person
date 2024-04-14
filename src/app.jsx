import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";  // Importando BrowserRouter, Routes e Route
import Navigation from "./Menu";
import MyDescription from "./About";
import ExibitionContacts from "./Contacts";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Navigation />} />
        <Route exact path="/about" element={<MyDescription />} />
        <Route exact path="/contacts" element={<ExibitionContacts />} />
        <Route exact path="/projects" element={<MyDescription />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
