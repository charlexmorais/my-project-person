import React from "react";
import "./App.css";

function App() {
  return (
    <div>
      <header>
        <nav>
          <ul className="menu">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
            <li>
              <a href="#">Projects</a>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <section>
          <h2>Hello, I'm Charles</h2>
          <div>
            <button>Download CV</button>
          </div>
        </section>
        <section className="photo">
          <img src="" alt="" />
        </section>
        <aside className="sidebar">
          <div className="icones-navigations">
            <a href="mailto:charlexavier100@gmail.com" className="nav-link">
              {/* <img
                src={portfolio}
                alt="icone-portfolio"
                className="meu-portfolio"
                title="portfolio"
                style={{ marginRight: "10px" }}
              /> */}
            </a>
          </div>
        </aside>
      </main>
      <footer></footer>
    </div>
  );
}

export default App;
