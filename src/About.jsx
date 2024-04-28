import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/style.css";
import Navigation from "./Menu";
import "./css/NavBar.css";


function MyDescription() {
  return (
    <div>
      <Navigation />

      <h2 style={{ textAlign: "center" }}>Sobre mim</h2>
      <div className="pagAbout ">
        <p style={{ textAlign: "justify" }}>
          Após a transição dos estudos ambientais, completei um curso de
          Desenvolvimento Web Full Stack em 2023, aprimorando habilidades em
          HTML, CSS, JavaScript, Node.js, React e PostgreSQL. Estou ansioso para
          aplicar esse conhecimento em projetos tecnológicos inovadores,
          destacando-me em soluções dinâmicas em JavaScript e gerenciamento
          eficiente de banco de dados. Proficiente em CSS, crio interfaces
          envolventes para experiências excepcionais do usuário. Pronto para
          oportunidades desafiadoras, trago dedicação para o sucesso do projeto
          por meio de testes rigorosos e solução de problemas adaptável. Minha
          versatilidade e disposição para desafios dinâmicos me tornam um
          candidato ideal para funções de desenvolvimento de software, pronto
          para explorar e agregar valor a projetos futuros.
        </p>
      </div>
      
    </div>
  );
}

export default MyDescription;
