import './AlertasActivas.css'
import TarjetaAlerta from '../TarjetaAlerta/TarjetaAlerta.jsx'
import { useNavigate } from "react-router-dom";
import { useState } from 'react';

export default function AlertasActivas () {
    const navigate = useNavigate();
    const alerta_total = [
        {estado: "Sin ver" ,nombre: "Antonella Montti", id: 1, tiempo: "1", alerta: "No se ha registrado en ningún checkpoint en las últimas 5h"},
        {estado: "Sin ver" ,nombre: "Martina Leppe", id: 2, tiempo: "1", alerta: "No se ha registrado en ningún checkpoint en las últimas 6h"},
        {estado: "Sin ver" ,nombre: "Matias Rojas", id: 3, tiempo: "3", alerta: "No se ha registrado en ningún checkpoint en las últimas 4.5h"},
        {estado: "Sin ver" ,nombre: "Bruno Flores" , id: 4, tiempo: "5", alerta: "No se ha registrado en ningún checkpoint en las últimas 8h"},
        {estado: "Recibida" ,nombre: "Isabel Jofré" , id: 5, tiempo: "5", alerta: "No se ha registrado en ningún checkpoint en las últimas 9h"},
        {estado: "Recibida" ,nombre: "Gabriela Pino" , id: 6, tiempo: "8", alerta: "No se ha registrado en ningún checkpoint en las últimas 9h"},
        {estado: "Trabajada",nombre: "Diego Pérez" , id: 7, tiempo: "10", alerta: "No se ha registrado en ningún checkpoint en las últimas 10h"},
        {estado: "Trabajada",nombre: "Cynthia López" , id: 8, tiempo: "12", alerta: "No se ha registrado en ningún checkpoint en las últimas 15h"},
        {estado: "Trabajada",nombre: "Mauricio Saavedra" , id: 9, tiempo: "16", alerta: "No se ha registrado en ningún checkpoint en las últimas 15h"},
        {estado: "Trabajada",nombre: "Sebastián Ayala" , id: 10, tiempo: "26", alerta: "No se ha registrado en ningún checkpoint en las últimas 15h"},
        {estado: "Trabajada",nombre: "Paz Fuentalba" , id: 11, tiempo: "34", alerta: "No se ha registrado en ningún checkpoint en las últimas 15h"},
        {estado: "Trabajada",nombre: "Martín Carrasco" , id: 12, tiempo: "42", alerta: "No se ha registrado en ningún checkpoint en las últimas 15h"},
        {estado: "Trabajada",nombre: "Carmen Quispe" , id: 13, tiempo: "46", alerta: "No se ha registrado en ningún checkpoint en las últimas 15h"},
    ]

    const [alertas, setAlertas] = useState(alerta_total.filter((alerta) => alerta.estado === 'Sin ver'))


    const handleclickvolver = () =>{
        navigate('/main-page')
    }

    const handleOptionChange = (event) => {
        if (event.target.value==="activo"){
            const alertasActivas = alerta_total.filter((alerta) => alerta.estado === 'Sin ver');
            setAlertas(alertasActivas);
        }
        if (event.target.value==="recibida"){
            const alertasRecibidas = alerta_total.filter((alerta) => alerta.estado === 'Recibida');
            setAlertas(alertasRecibidas);
        }
        if (event.target.value==="trabajada"){
            const alertasTrabajadas = alerta_total.filter((alerta) => alerta.estado === 'Trabajada');
            setAlertas(alertasTrabajadas);
        }
    }
    return(
        <div className='container-alerta'>
            <div className='elementos-alerta'>
                <div className='container-titulo-alerta'>
                    <div className='titulo-alerta'>
                        ALERTAS
                    </div>
                    <select name="tipo_alerta" className="form-control dropdown-blanco" style={{maxWidth: "100px"}} onChange={handleOptionChange}>
                        <option key="1" value="activo" >
                            Sin ver
                        </option>
                        <option key="2" value="recibida">
                            Recibidas
                        </option>
                        <option key="3" value="trabajada">
                            Trabajadas
                        </option>
                        </select>
                </div>
                <div className='rectangulos-pequeños'>
                {alertas.map((alerta) => (
                <div key={alerta.id} className="column ">
                    <TarjetaAlerta nombre={alerta.nombre} tiempo={alerta.tiempo} alerta={alerta.alerta} id={alerta.id}/>
                </div>
                

            ))}

                </div>
                <button type="button" class="btn btn-success btn-lg mt-3 mb-5" onClick={handleclickvolver}>Volver</button>
            </div>
        
        </div>
    )
}