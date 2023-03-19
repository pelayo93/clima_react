import React, { useState } from "react";
import Error from "./Error";
import PropTypes from 'prop-types';
import './Formulario.css'

function Formulario({busqueda, guardarBusqueda, guardarConsultar}) {


  const [error, guardarError] = useState(false);

  // extraer ciudad y pais
  const { ciudad, pais } = busqueda;

  // funcion que coloca los elementos en el state

  const handleChange = (e) => {
    // actualizar el state
    guardarBusqueda({
      ...busqueda,
      [e.target.name]: e.target.value,
    });
  };

  // Cuando el usuario da submit al form

    const handleSubmit = e =>{
      e.preventDefault();

      //validar
      if (ciudad.trim()  === '' || pais.trim() === ''){
        guardarError(true);
        return;
      }
      guardarError(false);
      // pasarlo al componente principal
      guardarConsultar(true);
    }

  return (
    
    <form 
      id="msform"
      onSubmit={handleSubmit}
    >
   {error ? <Error mensaje="Ambos campos son obligatorios"/> : null}
    <fieldset>
        <input 
          type="text"
              name="pais"
              className="form-control"
              id="pais"
              aria-describedby="emailHelp"
              onChange={handleChange}
              value={pais} placeholder="Pais"
          />
        <input 
          type="text"
              name="ciudad"
              className="form-control"
              id="ciudad"
              aria-describedby="emailHelp"
              onChange={handleChange}
              value={ciudad} 
              placeholder="Ciudad"/>
        <input type="submit" name="next" className="next action-button" value="Buscar"/>
    </fieldset>
</form>
  );
}

Formulario.propTypes = {
  
  busqueda: PropTypes.object.isRequired,
  guardarBusqueda: PropTypes.func.isRequired,
  guardarConsultar: PropTypes.func.isRequired
}

export default Formulario;
