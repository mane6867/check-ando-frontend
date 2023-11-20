import './Login.css';
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";



export default function Login() {
    const navigate = useNavigate();

    const handleSubmit =  () => {
    navigate("/main");
  
    };

    return (
        <div className="login teplate d-flex justify-content-center align-items-center vh-100 ">
            <div className="form_container p-5 rounded shadow-lg p-3 mb-5 bg-body-tertiary rounded">
                <form onSubmit={handleSubmit} >
                <h3 className="text-center">Iniciar sesión</h3>
                <div className="mb-2">
                    <label htmlFor = "email" >Email</label>
                    <input 
                    type= 'email' 
                    placeholder="Ingresa tu email" 
                    className="form-control bg-white"
                    required
                    />
                </div>
                <div className="mb-2">
                    <label htmlFor = "password">Contraseña</label>
                    <input 
                    type= 'password' 
                    placeholder="Ingresa tu contraseña" 
                    className="form-control bg-white"
                    required
                    />
                </div>
                <div className="d-grid">
                    <button className="btn btn-success">Ingresar</button>
                </div>

            </form>
            
            </div>

            
        </div>
    )
}