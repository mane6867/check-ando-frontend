import React from 'react';
import GraficoTorta from './Grafico/GraficoTorta';
import GraficoBarras from "./Grafico/GraficoBarras";
import GraficoLineas from "./Grafico/GraficoLineas";

const Estadisticas = () => {
  const estiloContenedor = {
    display: 'flex',
    justifyContent: 'space-around',  // Distribuye los elementos equitativamente en el contenedor
    textAlign: 'center',
  };

  const estiloColumna = {
    flex: '1',  // Ocupa el espacio disponible de manera equitativa
    margin: '0 10px',  // Añade márgenes entre las columnas
  };

  return (
    <div>
        <br></br>
        <h2 style={ {color: "white", textAlign: 'center'} }>Estadísticas del parque</h2>
        <br></br>
        <div style={estiloContenedor}>
            <div style={estiloColumna}>
                <h3 style={{ color: 'white' }}>Extravíos por edad</h3>
                <GraficoLineas />
            </div>
            <div style={estiloColumna}>
                <h3 style={{ color: 'white' }}>Tiempo marcado checkpoints</h3>
                <GraficoBarras />
            </div>
            <div style={estiloColumna}>
                <h3 style={{ color: 'white' }}>Frecuencia nivel experiencia</h3>
                <GraficoTorta />
            </div>
        </div>
    </div>
  );
};

export default Estadisticas;
