import './ActividadReciente.css'
import TarjetaActividad from '../TarjetaActividad/TarjetaActividad'
import { useNavigate } from "react-router-dom";

export default function ActividadReciente () {
    const navigate = useNavigate()
    const actividades = [
        {nombre: "Daniel Fuentealba", id: 1, tiempo: "8", actividad: "Se ha registrado en el checkpoint 5"},
        {nombre: "Carmen Silva", id: 2, tiempo: "15", actividad: "Se ha registrado en el checkpoint 2"},
        {nombre: "Roberto Vásquez", id: 3, tiempo: "16", actividad: "Se ha registrado en el checkpoint 2"},
        {nombre: "Camila Ogas" , id: 4, tiempo: "25", actividad: "Se ha registrado en el checkpoint 4"},
        {nombre: "Isabel Jofré" , id: 5, tiempo: "25", actividad: "Se ha registrado en el checkpoint 4"},
        {nombre: "Gabriela Pino" , id: 6, tiempo: "25", actividad: "Se ha registrado en el checkpoint 4"},
        {nombre: "Diego Pérez" , id: 7, tiempo: "40", actividad: "Se ha registrado en el checkpoint 4"},
        {nombre: "Cynthia López" , id: 8, tiempo: "40", actividad: "Se ha registrado en el checkpoint 4"},
    ]

    const handleclickvolver = () =>{
        navigate('/main-page')
    }
    return(
        <div className='container-actividad'>
            <div className='elementos-actividad'>
                <div className='container-titulo-actividad'>
                    <div className='titulo-actividad'>
                        ACTIVIDAD RECIENTE
                    </div>
                </div>
                <div className='rectangulos-pequeños'>
                {actividades.map((actividad) => (
                <div key={actividad.id} className="column ">
                    <TarjetaActividad nombre={actividad.nombre} tiempo={actividad.tiempo} actividad={actividad.actividad}/>
                </div>
                

            ))}

                </div>
                <button type="button" class="btn btn-success btn-lg mt-3 mb-5" onClick={handleclickvolver}>Volver</button>
            </div>
        
        </div>
    )
}