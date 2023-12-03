import "./TarjetaUsuario.css"
import { Link } from "react-router-dom"

export default function TarjetaUsuario({ nombre, imagen }){
    return(<>
    <div class="card_user">
    <div class="card_load" style={{backgroundImage: `url(${imagen})`}}>
    </div>
    <div class="card_load_extreme_title">{nombre}</div>
    <Link to={`/usuarios/${nombre}`}>
        <div className="card_load_extreme_descripion">Ver Usuario</div>
    </Link>
    </div>
    </>)
}