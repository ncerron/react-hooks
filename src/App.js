import React, { Fragment, useState, useEffect } from "react";
import Formulario from "./components/Formulario";
import Turno from "./components/Turno";

function App() {
  //turnos en local storage
  let turnosIniciales = JSON.parse(localStorage.getItem("turnos"));
  if (!turnosIniciales) {
    turnosIniciales = [];
  }

  //arreglo de turnos
  const [turnos, setTurnos] = useState(turnosIniciales);

  //actualizamos el loca storage
  useEffect(() => {
    localStorage.setItem("turnos", JSON.stringify(turnos));
  }, [turnos]);

  //funcion que tome los turnos actuales y agregue el nuevo turno
  const agregarTurno = (turno) => {
    setTurnos([...turnos, turno]);
  };

  //funcion que elimina un turno por su id
  const eliminarTurno = (id) => {
    const nuevosTurnos = turnos.filter((turno) => turno.id !== id);
    setTurnos(nuevosTurnos);
  };

  //mensaje condicional
  const titulo = turnos.length === 0 ? null : "Administra tus turnos";

  return (
    <Fragment>
      <div className="App">
        <h2>Administrador de turnos</h2>

        <div className="container">
          <div className="row">
            <div className="one-half column">
              <Formulario agregarTurno={agregarTurno} />
            </div>
            <div className="one-half column">
              <h3>{titulo}</h3>
              {turnos.map((turno) => (
                <Turno
                  key={turno.id}
                  turno={turno}
                  eliminarTurno={eliminarTurno}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
