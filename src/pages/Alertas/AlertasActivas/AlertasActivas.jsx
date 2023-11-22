import './AlertasActivas.css'
import TarjetaAlerta from '../TarjetaAlerta/TarjetaAlerta.jsx'
import { useNavigate } from "react-router-dom";

export default function AlertasActivas () {
    const navigate = useNavigate()
    const alertas = [
        {nombre: "Daniel Fuentealba", id: 1, tiempo: "1", alerta: "No se ha registrado en ningún checkpoint en las últimas 5h"},
        {nombre: "Carmen Silva", id: 2, tiempo: "1", alerta: "No se ha registrado en ningún checkpoint en las últimas 6h"},
        {nombre: "Roberto Vásquez", id: 3, tiempo: "3", alerta: "No se ha registrado en ningún checkpoint en las últimas 4.5h"},
        {nombre: "Camila Ogas" , id: 4, tiempo: "5", alerta: "No se ha registrado en ningún checkpoint en las últimas 8h"},
        {nombre: "Isabel Jofré" , id: 5, tiempo: "5", alerta: "No se ha registrado en ningún checkpoint en las últimas 9h"},
        {nombre: "Gabriela Pino" , id: 6, tiempo: "8", alerta: "No se ha registrado en ningún checkpoint en las últimas 9h"},
        {nombre: "Diego Pérez" , id: 7, tiempo: "10", alerta: "No se ha registrado en ningún checkpoint en las últimas 10h"},
        {nombre: "Cynthia López" , id: 8, tiempo: "12", alerta: "No se ha registrado en ningún checkpoint en las últimas 15h"},
    ]

    const handleclickvolver = () =>{
        navigate('/main-page')
    }
    return(
        <div className='container-actividad'>
            <div className='elementos-actividad'>
                <div className='container-titulo-actividad'>
                    <div className='titulo-actividad'>
                        ALERTAS ACTIVAS
                    </div>
                </div>
                <div className='rectangulos-pequeños'>
                {alertas.map((alerta) => (
                <div key={alerta.id} className="column ">
                    <TarjetaAlerta nombre={alerta.nombre} tiempo={alerta.tiempo} alerta={alerta.alerta}/>
                </div>
                

            ))}

                </div>
                <button type="button" class="btn btn-success btn-lg mt-3 mb-5" onClick={handleclickvolver}>Volver</button>
            </div>
        
        </div>
    )
}