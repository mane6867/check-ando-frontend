import './SectionImage.css'
import { Link, useMatch, useResolvedPath , useNavigate} from "react-router-dom"

export default function SectionImage(){
  const navigate = useNavigate()

  const handlelogin = () => {
    navigate("/login");
  }
    return(
    <div className="container-lan" >
        <div class="img">
        </div>
        <div className="column">
          <div className="card">
              <p class="text-title">CHECK-ANDO</p>
              <p class="text-body">"Deja tu marca en los senderos, explora sin miedo"</p>
              <button type="button" class="btn btn-success btn-sm" data-bs-toggle="button" onClick={handlelogin}>Iniciar</button>
          </div>
        </div>
    </div>)
}