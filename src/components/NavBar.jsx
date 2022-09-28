import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav className="nav-bar">
      <div className="app-container flex">
        <img className="nav-img" src="/assets/logo.png"></img>
        <div>
          <Link className="nav-a" to="/">Home</Link>
          <Link className="nav-a" to="/imoveis">Gestão Imobiliária</Link>
          <Link className="nav-a" to="/gestao">Serviços Engenharia</Link>
          <Link className="nav-a" to="/captacao">Captação de Água</Link>
        </div>
        <div className="toggler">
          <p className="toggler--light">Light</p>
          <div className="toggler--slider" onClick={console.log("ola")}>
            <div className="toggler--slider--circle"></div>
          </div>
          <p className="toggler--dark">Dark</p>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
