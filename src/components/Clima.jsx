import React from "react";
import PropTypes from "prop-types";
import "../index.css";

function Clima({ resultado }) {
  //extraer los valores
  const { name, main } = resultado;
  if (!name) {
    return null;
  }

  //Grados Kelvin
  const kelvin = 273.15;
  // crea un objeto Date con la fecha y hora actuales
let fechaActual = new Date();

// obtiene el día, mes y año actual
let dia = fechaActual.getDate();
let mes = fechaActual.getMonth() + 1; // enero es 0, por lo que debes sumar 1
let año = fechaActual.getFullYear();
let hora = fechaActual.getHours();
let minutos = fechaActual.getMinutes();
let segundos = fechaActual.getSeconds();

let numeroDiaSemana = fechaActual.getDay();
let diasSemana = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];


let nombreDiaSemana = diasSemana[numeroDiaSemana];

// crea una cadena de texto con la fecha y hora actuales y Dia
let fechaHoraActual = dia + '/' + mes + '/' + año;
let horaActual = hora +':' + minutos + ':' + segundos;

const icoUrl = 'https://openweathermap.org/img/w/'

  return (
  
    <div className="wrapper">
      <div className="widget-container">
        <div className="top-left">
          <h1 className="city" id="city">
          {name}
          </h1>
          <h2 id="day">{nombreDiaSemana}</h2>
          <h3 id="date">{fechaHoraActual}</h3>
          <h3 id="time">{horaActual}</h3>
        
          <p className="geo"></p>
        </div>
        <div className="top-right">
          <h1 id="weather-status">{resultado.weather[0].description}</h1>
          <img
            className="weather-icon"
            src={icoUrl + resultado.weather[0].icon +  '.png'}
            alt="Imagen del clima"
          />
        </div>
        <div className="horizontal-half-divider"></div>
        <div className="bottom-left">
          <h1 id="temperature">{parseFloat(main.temp - kelvin, 10).toFixed(2)} <span>&#x2103;</span></h1>
          
        </div>
        <div className="vertical-half-divider"></div>
        <div className="bottom-right">
          <div className="other-details-key">
            <p>Temperatura Maxima</p>
            <p>Temperatura Minima</p>
            <p>Humedad</p>
            <p>velocidad</p>
          </div>
          <div className="other-details-values">
            <p className="windspeed">{parseFloat(main.temp_max - kelvin, 10).toFixed(2)}&#x2103;</p>
            <p className="humidity">{parseFloat(main.temp_min - kelvin, 10).toFixed(2)}&#x2103;</p>
            <p className="pressure">{main.humidity}</p>
            <p className="sunrise-time">{resultado.wind.speed}</p>
            </div>
        </div>
      </div>
    </div>
  );
}
Clima.propTypes = {
  resultado: PropTypes.object.isRequired,
};
export default Clima;
