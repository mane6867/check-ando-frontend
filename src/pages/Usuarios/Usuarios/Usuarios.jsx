import TarjetaUsuario from "../TarjetaUsuario/TarjetaUsuario.jsx";
import "./Usuarios.css";
import 'bootstrap-icons/font/bootstrap-icons.css';
import { Link } from "react-router-dom"


export default function Usuarios(){

    const usuarios1 = [
        { id: 1, nombre: "Magdalena Pino", image: "/imagen-1-user.jpg"},
        { id: 2, nombre: "Camila Ogas", image: "/imagen-1-user.jpg"},
        { id: 3, nombre: "Sofía Barraza", image: "/imagen-1-user.jpg"},
        { id: 4, nombre: "Soledad Bravo", image: "/imagen-1-user.jpg"},
        { id: 5, nombre: "Isabel Jofré", image: "/imagen-1-user.jpg"},
        { id: 11, nombre: "Magdalena Pino", image: "/imagen-1-user.jpg"},
        { id: 12, nombre: "Camila Ogas", image: "/imagen-1-user.jpg"},
        { id: 13, nombre: "Juan Bodoque", image: "/imagen-1-user.jpg"},
        { id: 14, nombre: "Andrés Birke", image: "/imagen-1-user.jpg"},
        { id: 15, nombre: "Esperanza Riquelma", image: "/imagen-1-user.jpg"},
        { id: 21, nombre: "Magdalena Casas", image: "/imagen-1-user.jpg"},
        { id: 22, nombre: "Fernanda Donoso", image: "/imagen-1-user.jpg"},
        { id: 23, nombre: "Francisca Vergara", image: "/imagen-1-user.jpg"},
        { id: 24, nombre: "Isidora Lazo", image: "/imagen-1-user.jpg"},
        { id: 25, nombre: "Javiera Sotomayor", image: "/imagen-1-user.jpg"},
    ]

    const inputStyle = {
        backgroundColor: 'white', 
        width: '400px', 
        marginTop: '20px',
        marginRight: '5px',
    };

    const inputButtonStyle = {
        marginTop: '20px',
        marginLeft: '30px',
        marginRight: '5px',
    };

    const buttonStyle = {
        marginTop: '20px',
        marginLeft: '30px',
    };

    return(<div>
    <div class="input-group mb-3" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <div class="input-group-prepend">
            <button class="btn btn-outline-secondary" type="button" className="btn btn-success" style={ inputButtonStyle }>
                <i class="bi bi-search"></i>
            </button>
        </div>
        <div>
        <input type="text" class="form-control" placeholder="Nombre" aria-label="" aria-describedby="basic-addon1" style={ inputStyle }/>
        </div>
        <div class="input-group-prepend">
            <button class="btn btn-outline-secondary" className="btn btn-success" type="button" style={ inputButtonStyle }>
                <i class="bi bi-search"></i>
            </button>
        </div>
        <div>
        <input type="text" class="form-control" placeholder="RUT/DNI" aria-label="" aria-describedby="basic-addon1" style={ inputStyle }/>
        </div>
        <Link to='/agregar-usuario'>
            <button class="btn btn-outline-secondary" type="button" className="btn btn-success" style={ buttonStyle }>Agregar Usuario</button>
        </Link>
    </div>
    <div className="tablero">
        <div className="row">
            {usuarios1.map((usuario) => (
            <div key={usuario.id} className="column">
                <TarjetaUsuario nombre={usuario.nombre} fotografía= {usuario.image}/>
            </div>
            ))}
        </div>
    </div>
    </div>)
}