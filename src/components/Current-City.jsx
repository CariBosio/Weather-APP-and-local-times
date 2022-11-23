import React from "react";
import "./Current-City.css";

export default function CurrentCity() {
  function muestraReloj() {
    var fecha = new Date(),
      horas = fecha.getHours(),
      ampm,
      minutos = fecha.getMinutes(),
      segundos = fecha.getSeconds(),
      diaSemana = fecha.getDay(),
      dia = fecha.getDate(),
      mes = fecha.getMonth(),
      year = fecha.getFullYear(),
      greeting;

    var pHoras = document.getElementById("horas"),
      pAMPM = document.getElementById("ampm"),
      pMinutos = document.getElementById("minutos"),
      pSegundos = document.getElementById("segundos"),
      pDiaSemana = document.getElementById("diaSemana"),
      pDia = document.getElementById("dia"),
      pMes = document.getElementById("mes"),
      pYear = document.getElementById("year"),
      pGreeting = document.getElementById("greeting");

    // var ampm = ["AM", "PM"];

    // if (horas >= 6 && horas < 12  && ampm === "AM") {

    //   greeting = "¡Buenos días!";
    // } else if (horas >= 12 && horas < 20 && ampm === "PM") {

    //   greeting = "¡Buenas tardes!";
    // } else {
    //   greeting = "¡Buenas noches!";
    // }

    // pAMPM.textContent = ampm;
    // pGreeting.textContent = greeting;

    var semana = [
      "Domingo",
      "Lunes",
      "Martes",
      "Miércoles",
      "Jueves",
      "Viernes",
      "Sábado",
    ];
    pDiaSemana.textContent = semana[diaSemana];

    pDia.textContent = dia;

    var meses = [
      "Enero",
      "Febrero",
      "Marzo",
      "Abril",
      "Mayo",
      "Junio",
      "Julio",
      "Agosto",
      "Septiembre",
      "Octubre",
      "Noviembre",
      "Diciembre",
    ];
    pMes.textContent = meses[mes];

    pYear.textContent = year;

    // if (horas >= 12 && horas < 20) {
    //   horas = horas - 12;
    //   ampm = "PM";
    //   greeting = "¡Buenas tardes!";
    // } else if (horas >= 20 && horas < 0) {
    //   horas = horas - 12;
    //   ampm = "PM";
    //   greeting = "¡Buenas noches!";
    // } else {
    //   ampm = "AM";
    //   greeting = "¡Buenos días!";
    // }

    // if (horas === 0) {
    //   horas = 12;
    // }

    if (horas >= 6 && horas < 12) {
      ampm = "AM";
      greeting = "¡Buenos días!";
    } else if (horas >= 12 && horas < 18) {
      horas = horas - 12;
      ampm = "PM";
      greeting = "¡Buenas tardes!";
    } else if (horas >= 18 && horas < 24) {
      horas = horas - 12;
      ampm = "PM";
      greeting = "¡Buenas noches!";
    } else {
      ampm = "AM";
      greeting = "¡Buenas noches!";
    }

    if (horas === 0) {
      horas = 12;
    }


    pHoras.textContent = horas;
    pAMPM.textContent = ampm;
    pGreeting.textContent = greeting;

    if (minutos < 10) {
      minutos = "0" + minutos;
    }
    if (segundos < 10) {
      segundos = "0" + segundos;
    }

    pMinutos.textContent = minutos;
    pSegundos.textContent = segundos;
  }

  window.onload = function () {
    setInterval(muestraReloj, 1000);
  };

  return (
    <div>
    
      <p id="greeting" className="greeting"></p>
      <div className="localwrap">
        <div className="localwidget">
          <p id="diaSemana" className="diaSemana"></p>
          <br />
          <div className="local-fecha">
            <p id="dia" className="date-fecha"></p>
            <p className="date-fecha">de</p>
            <p id="mes" className="date-fecha"></p>
            <p className="date-fecha">del</p>
            <p id="year" className="date-fecha"></p>
          </div>
          <div className="reloj">
            <div className="local-reloj">
              <p id="horas" className="horas"></p>
              <p className="horas">:</p>
              <p id="minutos" className="minutos"></p>
              <p className="horas">:</p>
            </div>
            <div className="caja-segundos">
              <p id="segundos" className="segundos"></p>
              <p id="ampm" class="date-time"></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
