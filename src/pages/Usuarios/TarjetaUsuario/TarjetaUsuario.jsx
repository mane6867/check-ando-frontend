import "./TarjetaUsuario.css"

export default function TarjetaUsuario({ nombre }){
    return(<>
    <div class="card_user">
    <div class="card_load">
    </div>
    <div class="card_load_extreme_title">{nombre}</div>
    <div class="card_load_extreme_descripion" >Ver Usuario</div>
    </div>
    </>)
}