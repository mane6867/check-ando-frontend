import React from 'react';
import { useParams } from 'react-router-dom';
import TarjetaActividad from '../../Actividad/TarjetaActividad/TarjetaActividad';

export default function PerfilUsuario(){

    const { nombre } = useParams();

    const actividades = [
        {id: 1, tiempo: "2", actividad: "Se ha registrado en el checkpoint 4"},
        {id: 2, tiempo: "30", actividad: "Se ha registrado en el checkpoint 3"},
        {id: 3, tiempo: "45", actividad: "Se ha registrado en el checkpoint 2"},
        {id: 4, tiempo: "58", actividad: "Se ha registrado en el checkpoint 1"},
    ]

    console.log(nombre)

    return(
        <div>
            <p style={{color: "white"}}>{nombre}</p>
            {actividades.map((actividad) => (
                <div key={actividad.id} className="column">
                    <TarjetaActividad nombre={nombre} tiempo={actividad.tiempo} actividad={actividad.actividad}/>
                </div>
            ))}

        </div>

    )
}