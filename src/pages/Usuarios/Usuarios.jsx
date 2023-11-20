import TarjetaUsuario from "./TarjetaUsuario/TarjetaUsuario.jsx"

export default function Usuarios(){

    const usuarios = [
        { id: 1, nombre: "Magdalena Pino"},
        { id: 2, nombre: "Camila Ogas"},
        { id: 3, nombre: "Sofía Barraza"},
        { id: 4, nombre: "Soledad Bravo"},
        { id: 5, nombre: "Isabel Jofré"}
    ]

    return(<>
    <h1>Opcion 1</h1>
    <div className="tablero">
        <div className="tablero-row">
            {usuarios.map((usuario) => (
            <div key={usuario.id} className="column">
                <TarjetaUsuario nombre={usuario.nombre} />
            </div>
            ))}
        </div>
    </div>
    <h1>Opcion 2</h1>
    <p>el problema con esta es que se pega a la navbar</p>
    <div class="row">
        {usuarios.map( (usuario) => (
        <div class="col-sm-6">
            <TarjetaUsuario nombre={usuario.nombre} />
            <br></br>
        </div>
        ))}

    </div>
    </>)
}