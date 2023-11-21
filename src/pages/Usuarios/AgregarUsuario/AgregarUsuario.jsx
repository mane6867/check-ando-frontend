import './AgregarUsuario.css';
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";



export default function AgregarUsuario() {
    const navigate = useNavigate();

    const handleSubmit =  () => {
    navigate("/usuarios");
  
    };

    return (
        <div className="login teplate d-flex justify-content-center align-items-center vh-100 ">
            <div className="form_container p-5 rounded shadow-lg p-3 mb-5 bg-body-tertiary rounded">
                <form onSubmit={handleSubmit} >
                <h3 className="text-center">Agregar Usuario</h3>
                <div className="mb-2">
                    <label htmlFor = "name" >Nombre completo</label>
                    <input 
                    type= 'name' 
                    placeholder="Javiera Bórquez" 
                    className="form-control bg-white"
                    required
                    />
                </div>
                <div className="mb-2">
                    <label htmlFor = "rut">RUT o DNI sin puntos ni guión</label>
                    <input 
                    type= 'name' 
                    placeholder="218784402" 
                    className="form-control bg-white"
                    required
                    />
                </div>
                <div className="mb-2">
                    <label htmlFor = "email">Email</label>
                    <input 
                    type= 'email' 
                    placeholder="name@email.com" 
                    className="form-control bg-white"
                    required
                    />
                </div>
                <div className="mb-2">
                    <label htmlFor = "edad">Edad</label>
                    <input 
                    type= 'name' 
                    placeholder="34" 
                    className="form-control bg-white"
                    required
                    />
                </div>
                <div class="mb-2">
                    <label for="exampleFormControlSelect1">Experiencia</label>
                    <select class="form-control dropdown-blanco" id="exampleFormControlSelect1">
                    <option>Nada</option>
                    <option>Poca</option>
                    <option>Media</option>
                    <option>Alta</option>
                    <option>Experto</option>
                    </select>
                </div>
                <div className="d-grid">
                    <button className="btn btn-success">Agregar</button>
                </div>

            </form>
            
            </div>

            
        </div>
    )
}