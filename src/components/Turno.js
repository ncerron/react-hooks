import React from "react";
const Turno = ({ turno, eliminarTurno }) => {
  return (
    <div className="turno">
      <p>
        Nombre: <span>{turno.nombre}</span>
      </p>
      <p>
        {" "}
        Consultorio: <span>{turno.consultorio}</span>
      </p>
      <p>
        {" "}
        Fecha: <span>{turno.fecha}</span>
      </p>
      <p>
        {" "}
        Hora: <span>{turno.hora}</span>
      </p>
      <button
        className="button eliminar u-full-width"
        onClick={() => eliminarTurno(turno.id)}
      >
        Eliminar
      </button>
    </div>
  );
};

export default Turno;
