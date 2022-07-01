import React from 'react';
import "./navbar.scss";
import logo from "../../assets/logo.png";
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

function Navbar({menuOpen,setMenuOpen}) {
  return (
    <div className={'navBar ' + (menuOpen && "active")}>
      <header>
        <div className="left">
          <img src={logo} alt="logo" className="logo" />
          <div className="logo-title">
            <h2>NEW ERA</h2>
            <h4>EXPERIENCE</h4>
          </div>
        </div>
        <div className="navigation">
          <a href="/#">Inicio</a>
          <a href="/#">Ver Partidos</a>
          <a href="/#">Como funciona</a>
          <a href="/#">Clubes</a>
          <a href="/#" className="last">
            Contacto
          </a>
        </div>
        <div className="menu" onClick={()=>setMenuOpen(!menuOpen)} >
            <MenuIcon className='open-btn'/>
            <CloseIcon className="close-btn"/>
        </div>
      </header>
    </div>
  )
}

export default Navbar
