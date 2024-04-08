import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navigation from "./Menu";
import Home from "./components/Home"; // Importe o componente para a página Home
import About from "./components/About"; // Importe o componente para a página About
import Contact from "./components/Contact"; // Importe o componente para a página Contact
import Projects from "./Projects"; // Importe o componente para a página Projects

function App() {
  return (
    <Router>
      <div>
        <Navigation />
        <Switch>
          {/* Defina as rotas para cada página */}
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/projects" component={Projects} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
