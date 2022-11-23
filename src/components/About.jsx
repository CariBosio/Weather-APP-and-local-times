import React from "react";
import "./About.css";
import { FiCheck } from "react-icons/fi";
import CurrentCity from "./Current-City";

function About() {
  return (
    <div className="main-container">
    <div className="location">
    <h2 className="tipo">Fecha y hora Local</h2>
      <CurrentCity/>
    </div>
    <div className="text">
    <hr className="raya"/>
    <p className="informacion"><FiCheck />
      Accedé a datos meteorológicos actuales para cualquier ubicación, incluídas
      más de 200.000 ciudades.</p>
      <br/>
     <p className="informacion"><FiCheck />Poné el nombre de la ciudad en el buscador y presioná buscar.</p>
      <br/>
      
      <p className="informacion"><FiCheck />Podés buscar más de una ciudad a la vez. </p>
      <br/>
     
      <p className="informacion"><FiCheck />Podés cerrar las ciudades que no quieras ver. </p>
      <br/>
     
      {/* <p><FiCheck />Podés cambiar de grados Celsius a Fahrenheit y viceversa. </p>
      <br/> */}
      
      <p className="informacion"><FiCheck />Si entrás a una ciudad, podés ver más detalles. </p>

      <hr className="raya"/>
    </div>
    </div>
  );
}

export default About;
