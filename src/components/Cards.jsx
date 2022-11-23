import React from "react";
import "./Cards.css";

import Card from "./Card.jsx";
import CurrentCity from "./Current-City";

export default function Cards({ cities, onClose }) {

  return (
    <div className="main-container">
    <div className="location">
    <h2 className="tipo">Fecha y hora Local</h2>
      <CurrentCity/>
    </div>

    <div className="weather-world">
    <h2 className="tipo">Clima Mundial</h2>
    <div className="cards">
    
      {cities.map((c) => (
        <Card
          key={c.id}
          temp={c.temp}
          max={c.max}
          min={c.min}
          name={c.name}
          country={c.country}
          humidity={c.humidity}
          img={c.img}
          onClose={() => onClose(c.id)}
          id={c.id}
          timezone={c.timezone}
        />
      ))}
    </div>
    </div>
    </div>
    
  );
}
