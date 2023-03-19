import React,{Fragment, useEffect, useState} from 'react'
import Formulario from './components/Formulario';
import Header from './components/Header';
import Clima from './components/Clima';
import Error from './components/Error';



function App({titulo}) {

  const [busqueda, guardarBusqueda] = useState({
    ciudad: "",
    pais: "",
  });

  const [consultar, guardarConsultar] = useState(false);
  const [resultado, guardarResultado] = useState({});
  const [error, guardarError] = useState(false);

  const {ciudad, pais} = busqueda;

useEffect(() =>{
  const consultarApi = async () =>{

      if (consultar) {
      const appId = 'f6f78b1887d46fc9131e5e24ad59d57a'
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${appId}`;
                    
      const respuesta = await fetch(url);
      const resultado =  await respuesta.json();
          guardarResultado(resultado);
          console.log(resultado.weather[0].description);
          guardarConsultar(false);

          // detecta si hubo resultados correctos en la consulta
          if (resultado.cod === "404") {
            guardarError(true);
          }else{
            guardarError(false);
          }
      }
  }
  consultarApi()

  // eslint-disable-next-line
}, [consultar]);


  let componente
if (error) {
  componente = <Error mensaje="No hay Resultados"/>
}else{
  componente =  <Clima resultado={resultado}

/>
}

  return (
    <Fragment>
       
         <Header 
          titulo='Clima React App'
         />

         <div className='contenedor-form'>
          <div className='container'>
            <div className='row'>
              <div className='col m6 s12'>
                <Formulario 
                  busqueda={busqueda}
                  guardarBusqueda={guardarBusqueda}
                  guardarConsultar={guardarConsultar}
                />
              </div>
             
            </div>
          </div>
         </div> 
         <div className='col m6 s12'>
                {componente}
              </div>
    </Fragment>
 

  );
}

export default App;
