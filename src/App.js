import React, { Fragment, useState } from "react";
import Formulario from "./components/Formulario";

function App() {
  //arreglo de turnos
  const [turnos, setTurnos] = useState([]);

  //funcion que tome los turnos actuales y agregue el nuevo turno
  const agregarTurno = (turno) => {
    setTurnos([...turnos, turno]);
  };

  return (
    <Fragment>
      <div className="App">
        <h1>Administrador de turnos</h1>

        <div className="container">
          <div className="row">
            <div className="one-half column">
              <Formulario agregarTurno={agregarTurno} />
            </div>
            <div className="one-half column">pepe</div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
