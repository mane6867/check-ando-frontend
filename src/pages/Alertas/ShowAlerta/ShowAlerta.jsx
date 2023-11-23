import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './ShowAlerta.css'; // Asegúrate de importar tu archivo de estilos

export default function ShowAlerta() {
  const { id } = useParams();
  const navigate = useNavigate();

  console.log(id);

  const alerta_total = [
    { check: 2,tiempo_ult_check: 5, estado: "Sin ver", nombre: "Antonella Montti", id: 1, tiempo: "1", alerta: "Se ha registrado un tiempo de demora de más de 2h" },
    { check: 6,tiempo_ult_check: 6, estado: "Sin ver", nombre: "Martina Leppe", id: 2, tiempo: "1", alerta: "Se ha registrado un tiempo de demora de más de 3h" },
    { check: 5,tiempo_ult_check: 4.5, estado: "Sin ver", nombre: "Matias Rojas", id: 3, tiempo: "3", alerta: "Se ha registrado un tiempo de demora de más de 2h" },
    { check: 7,tiempo_ult_check: 8, estado: "Sin ver", nombre: "Bruno Flores", id: 4, tiempo: "5", alerta: "Se ha registrado un tiempo de demora de más de 3h" },
    { check: 5,tiempo_ult_check: 9, estado: "Recibidas", nombre: "Isabel Jofré", id: 5, tiempo: "5", alerta: "Se ha registrado un tiempo de demora de más de 3h" },
    { check: 3,tiempo_ult_check: 9, estado: "Recibidas", nombre: "Gabriela Pino", id: 6, tiempo: "8", alerta: "Se ha registrado un tiempo de demora de más de 3h" },
    { check: 4,tiempo_ult_check: 10, estado: "Trabajadas", nombre: "Diego Pérez", id: 7, tiempo: "10", alerta: "Se ha registrado un tiempo de demora de más de 3.5h" },
    { check: 2,tiempo_ult_check: 15, estado: "Trabajadas", nombre: "Cynthia López", id: 8, tiempo: "12", alerta: "Se ha registrado un tiempo de demora de más de 5h" },
    { check: 7,tiempo_ult_check: 15, estado: "Trabajadas", nombre: "Mauricio Saavedra", id: 9, tiempo: "16", alerta: "Se ha registrado un tiempo de demora de más de 5h" },
    { check: 9,tiempo_ult_check: 9, estado: "Trabajadas", nombre: "Sebastián Ayala", id: 10, tiempo: "26", alerta: "Se ha registrado un tiempo de demora de más de 3h" },
    { check: 3,tiempo_ult_check: 5, estado: "Trabajadas", nombre: "Paz Fuentalba", id: 11, tiempo: "34", alerta: "Se ha registrado un tiempo de demora de más de 2h" },
    { check: 8,tiempo_ult_check: 12, estado: "Trabajadas", nombre: "Martín Carrasco", id: 12, tiempo: "42", alerta: "Se ha registrado un tiempo de demora de más de 3.5h" },
    { check: 1,tiempo_ult_check: 10, estado: "Trabajadas", nombre: "Carmen Quispe", id: 13, tiempo: "46", alerta: "Se ha registrado un tiempo de demora de más de 3h" },
  ];

  const alerta = alerta_total.find((alert) => alert.id === parseInt(id, 10));
  console.log(alerta);

  const handleVolverClick = () => {
    // Navegar a la ruta /alertas
    navigate('/alertas');
  };

  return (
    <div className="alert-container">
      <div className="alert-card">
        <div className="alert-header">
          <h2 className="alert-title">Alerta</h2>
        </div>
        <div className="alert-content">
          {alerta && (
            <>
              <p>Nombre usuario: {alerta.nombre}</p>
              <p>Tiempo desde último checkeo: {alerta.tiempo_ult_check} horas</p>
              <p>Último lugar de checkeo: Checkpoint {alerta.check}</p>
              <p>Estado: {alerta.estado}</p>
              <p>{alerta.alerta}</p>
            </>
          )}
        </div>
        <div className="alert-footer">
          <button className="btn btn-light">Editar</button>
          <button className="btn btn-light" onClick={handleVolverClick}>
            Volver
          </button>
        </div>
      </div>
    </div>
  );
}
