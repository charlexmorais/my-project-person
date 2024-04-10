// index.js or main.jsx
import React from "react";
// Altere sua importação de react-dom para importar de react-dom/client
import { createRoot } from "react-dom/client";

import { BrowserRouter } from "react-router-dom";
import MainRoutes from "./routes/routes"; // Correct import statement

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <MainRoutes />
  </BrowserRouter>
);
