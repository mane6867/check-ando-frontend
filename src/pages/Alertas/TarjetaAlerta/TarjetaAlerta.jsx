import "./TarjetaAlerta.css"

export default function TarjetaAlerta( { nombre, tiempo, alerta } ){

    const tarjetaAlertaStyle = {
        backgroundColor: "white",
        width: "18rem",
    };

    return(
        <div>
            <div class="card text-start w-100" style={ tarjetaAlertaStyle }>
                <div class="card-body">
                    <h5 class="card-title">{nombre}</h5>
                    <h6 class="card-subtitle mb-2 text-muted esquina-superior-derecha">Hace {tiempo}h</h6>
                    <p class="card-text">{alerta}</p>
                </div>
            </div>
        </div>
    )
}