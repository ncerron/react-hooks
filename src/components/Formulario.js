import { Fragment, useState } from "react";
import React from "react";
import uuid from "uuid/v4";

const Formulario = ({ agregarTurno }) => {
  //crear state turno
  const [turno, SetTurno] = useState({
    nombre: "",
    consultorio: "",
    fecha: "",
    hora: "",
  });

  //creamos 2do state usado para validar formulario
  const [error, SetError] = useState(false);

  //funcion que se ejecuta cada vez que el usuario escribe en un input
  const handleChange = (e) => {
    SetTurno({
      ...turno,
      [e.target.name]: e.target.value,
    });
  };

  //extraer valores
  const { nombre, consultorio, fecha, hora } = turno;

  //cuando el usuario presiona agregar turno
  const submitTurno = (e) => {
    e.preventDefault();
    //validar
    if (
      nombre.trim() === "" ||
      consultorio.trim() === "" ||
      fecha.trim() === "" ||
      hora.trim() === ""
    ) {
      SetError(true);
      return;
    }
    //Eliminar mensaje previo
    SetError(false);

    //asignar un ID unico
    turno.id = uuid();
    console.log(turno);

    //crear turno
    agregarTurno(turno);

    //reiniciar el formulario
  };

  return (
    <Fragment>
      <h2>Crear turno</h2>

      {error ? (
        <p className="alerta-error">Todos los campos son obligatorios</p>
      ) : null}

      <form onSubmit={submitTurno}>
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
