export default function TarjetaActividad( { nombre, tiempo, actividad } ){

    const tarjetaActividadStyle = {
        backgroundColor: "white",
        width: "18rem",
    };

    return(
        <div class="card" style={ tarjetaActividadStyle }>
            <div class="card-body">
                <h5 class="card-title">{nombre}</h5>
                <h6 class="card-subtitle mb-2 text-muted">Hace {tiempo} minutos</h6>
                <p class="card-text">{actividad}</p>
            </div>
        </div>
    )
}