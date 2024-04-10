import React from "react";
import { Routes, Route } from "react-router-dom";
import Navigation from "../Menu";
import Mydescription from "../About";

function MainRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Navigation />} />
      <Route path="/about" element={<Mydescription />} />
    </Routes>
  );
}

export default MainRoutes;
