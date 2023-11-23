import "./TarjetaActividad.css"

export default function TarjetaActividad( { nombre, tiempo, actividad } ){

    const tarjetaActividadStyle = {
        backgroundColor: "white",
        width: "18rem",
        fontFamily: "Montserrat",
    };

    return(
        <div>
            <div class="card text-start w-100" style={ tarjetaActividadStyle }>
                <div class="card-body">
                    <h5 class="card-title">{nombre}</h5>
                    <h6 class="card-subtitle mb-2 text-muted esquina-superior-derecha">Hace {tiempo} minutos</h6>
                    <p class="card-text">{actividad}</p>
                </div>
            </div>
        </div>
    )
}