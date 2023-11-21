import { BrowserRouter, Routes, Route } from "react-router-dom"
import UserWelcome from "../profile/UserWelcome"
import Instructions from "../pages/instructions"
import App from "./App"
import Navbar from "./Navbar/Navbar"
import LandingPage from "../pages/LandingPage/LandingPage"
import './index.css'
import Estadisticas from "../pages/Estadisticas"
import Usuarios from "../pages/Usuarios/Usuarios/Usuarios.jsx"
import AgregarUsuario from "../pages/Usuarios/AgregarUsuario/AgregarUsuario"
import Login from "../pages/Login/Login.jsx"
import PerfilUsuario from "../pages/Usuarios/PerfilUsuario/PerfilUsuario"


export default function Routing() {
    return(
        <>
        <BrowserRouter>
        <Navbar/>
        <Routes>
            <Route path="/welcome" element= {<UserWelcome/>}></Route>
            <Route path= "/estadisticas" element = {<Estadisticas/>}></Route>
            <Route path= "/" element = {<LandingPage/>}></Route>
            <Route path= "/usuarios" element = {<Usuarios/>}></Route>
            <Route path= "/agregar-usuario" element = {<AgregarUsuario/>}></Route>
            <Route path= "/login" element = {<Login/>}></Route>
            <Route path="/usuarios/:nombre" element = {<PerfilUsuario/>}></Route>
        </Routes>
        
        </BrowserRouter>
        </>
    )
}