import { Fragment, useState } from "react";
import React from "react";

const Formulario = () => {
  //crear state turno
  const [turno, SetTurno] = useState({
    nombre: "",
    consultorio: "",
    fecha: "",
    hora: "",
  });

  //funcion que se ejecuta cada vez que el usuario escribe en un input
  const handleChange = (e) => {
    SetTurno({
      ...turno,
      [e.target.name]: e.target.value,
    });
  };

  //extraer valores
  const { nombre, consultorio, fecha, hora } = turno;

  return (
    <Fragment>
      <h2>Crear turno</h2>
      <form>
        <input
          type="text"
          name="nombre"
          className="u-full-width"
          placeholder="Nombre"
          onChange={handleChange}
          value={nombre}
        />
        <input
          type="text"
          name="consultorio"
          className="u-full-width"
          placeholder="Consultorio"
          onChange={handleChange}
          value={consultorio}
        />
        <input
          type="date"
          name="fecha"
          className="u-full-width"
          onChange={handleChange}
          value={fecha}
        />
        <input
          type="time"
          name="hora"
          className="u-full-width"
          onChange={handleChange}
          value={hora}
        />

        <button type="submit" className="u-full-width button-primary">
          Agregar turno
        </button>
      </form>
    </Fragment>
  );
};

export default Formulario;
