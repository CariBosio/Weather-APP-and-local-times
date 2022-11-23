import React from "react";
// import Logo from "../img/logoHenry.png";
import LogoWeather from "../img/LogoWeather.png";
import SearchBar from "./SearchBar.jsx";
import "./Nav.css";
import { Link } from "react-router-dom";

function Nav({ onSearch }) {
  return (
    <nav className="navbar">
      <Link to="/">
        <p className="navbar-brand">
         
          <img
            id="logo"
            src={LogoWeather}
            width="40"
            height="40"
            className="d-inline-block align-top"
            alt=""
          />
          Weather App
        </p>
      </Link>
      <Link to="/">
        <span className="links">Inicio</span>
      </Link>
      <Link to="/about">
        <span className="links">Acerca de</span>
      </Link>
      <Link to="/contact">
        <span className="links">Contacto</span>
      </Link>
      <SearchBar onSearch={onSearch} />
    </nav>
  );
}

export default Nav;
