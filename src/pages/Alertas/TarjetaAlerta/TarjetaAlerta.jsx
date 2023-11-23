import "./TarjetaAlerta.css"

import { Link } from "react-router-dom"

export default function TarjetaAlerta( { id, nombre, tiempo, alerta } ){

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
                    <Link to={`/alertas/${id}`}>
                    <div className="card_load_extreme_descripion">Ver</div>
                    </Link>
                </div>
            </div>
        </div>
    )
}