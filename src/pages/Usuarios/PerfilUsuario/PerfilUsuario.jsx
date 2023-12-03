import React from 'react';
import { useParams } from 'react-router-dom';
import TarjetaActividad from '../../Actividad/TarjetaActividad/TarjetaActividad';
import FotoPerfil from "./FotoPerfil/FotoPerfil.jsx"

export default function PerfilUsuario(){

    const { nombre } = useParams();

    const pStyle = { 
        color: "black",
        textAlign: "left",
        fontFamily: "Montserrat",
    }

    const h3Style = {
        fontFamily: "Montserrat",
        color:"white",
    }

    const actividades = [
        {id: 1, tiempo: "2", actividad: "Se ha registrado en el checkpoint 4"},
        {id: 2, tiempo: "30", actividad: "Se ha registrado en el checkpoint 3"},
        {id: 3, tiempo: "45", actividad: "Se ha registrado en el checkpoint 2"},
        {id: 4, tiempo: "58", actividad: "Se ha registrado en el checkpoint 1"},
        {id: 5, tiempo: "59", actividad: "Se ha registrado en el checkpoint 0"},
        {id: 6, tiempo: "59", actividad: "Se ha inscrito como usuario check-ando"},
    ]


    return(
        <div className="container">
            <br></br>
            <br></br>
            <div className="row">
                <div className="col-md-4">
                    <br></br>
                    <br></br>
                    <FotoPerfil nombre_usuario= {nombre}/>
                    <br></br>
                    <br></br>
                    <br></br>
                    <button className="btn btn-primary mt-2 btn-success">Editar</button>
                    <br></br>
                    <button className="btn btn-secondary mt-2 btn-light" style={ { color:"#00471e" } }>Eliminar</button>
                </div>
                <div className="col-md-4">
                    <div style={ {backgroundColor:"#aeba85", borderRadius: "10px", padding: "15px"} }>
                        <h3 class="text-start" style={ h3Style }> { nombre } </h3>
                        <div style={ {backgroundColor: "white", borderRadius: "10px", padding: "25px"} }>
                            {/* <p style={ pStyle }>ID Usuario: 35</p> */}
                            <p style={ pStyle }>DNI: 218388101</p>
                            <p style={ pStyle }> {nombre.toLowerCase().split(" ")}@mail.com</p>
                            <p style={ pStyle }>Contacto de emergencia: {<br/>} Claudia Montero</p>
                            <p style={ pStyle }> Celular contacto de emergiencia {<br/>} +56965966038</p>
                        </div>
                    </div>
                    <br></br>
                    <div style={ {backgroundColor:"#aeba85", borderRadius: "10px", padding: "15px"} }>
                        <h3 class="text-start" style={ h3Style }>Situación actual</h3>
                        <div style={ {backgroundColor: "white", borderRadius: "10px", padding: "25px"} }>
                            <p style={ pStyle }>Último checkpoint marcado: 4</p>
                            <p style={ pStyle }>Hora último marcado: 15:34</p>
                            <p style={ pStyle }>Próximo checkpoint esperado: 5</p>
                            <p style={ pStyle }>Hora esperada siguiente marcado: 16:12</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <br></br>
                    <div style={ { backgroundColor: "#aeba85", height: '72vh', overflow:"scroll", borderRadius: "10px", padding: "25px"} }>
                        <h3 class="text-start" style={ h3Style }>Registro de Actividad</h3>
                        {actividades.map((actividad) => (
                            <div key={actividad.id} className="column">
                                <TarjetaActividad nombre={nombre} tiempo={actividad.tiempo} actividad={actividad.actividad}/>
                            </div>
                        
                        ))}
                    </div>
                </div>
                </div>
        </div>

    )
}