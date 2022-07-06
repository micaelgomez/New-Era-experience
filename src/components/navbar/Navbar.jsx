import React from "react";
import "./navbar.scss";
import logo from "../../assets/logo.png";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

function Navbar({ menuOpen, setMenuOpen }) {
  return (
    <div className={"navBar " + (menuOpen && "active")}>
      <header>
        <div className="left" id = "inicio">
          <a href="#landing">
          <img src={logo} alt="logo" className="logo" />
          </a>
          <div className="logo-title">
            <h2>NEW ERA</h2>
            <h4>EXPERIENCE</h4>
          </div>
        </div>
       
        <div className="navigation">
          <a href="#landing" onClick={() => setMenuOpen(false)}>
            Inicio
          </a>
          <a href="/#" onClick={() => setMenuOpen(false)}>
            Ver Partidos
          </a>
          <a href="#functions" onClick={() => setMenuOpen(false)}>
            Como funciona
          </a>
          <a href="#clubes" onClick={() => setMenuOpen(false)}>
            Clubes
          </a>
          <a
            href="#contact"
            className="last"
            onClick={() => setMenuOpen(false)}
          >
            Contacto
          </a>
        </div>
        <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
          <MenuIcon className="open-btn" />
          <CloseIcon className="close-btn" />
        </div>
      </header>
    </div>
  );
}

export default Navbar;
