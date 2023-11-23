import { BrowserRouter, Routes, Route } from "react-router-dom"
import Navbar from "./Navbar/Navbar"
import LandingPage from "../pages/LandingPage/LandingPage"
import './index.css'
import Estadisticas from "../pages/Estadísticas/Estadisticas.jsx"
import Usuarios from "../pages/Usuarios/Usuarios/Usuarios.jsx"
import AgregarUsuario from "../pages/Usuarios/AgregarUsuario/AgregarUsuario"
import Login from "../pages/Login/Login.jsx"
import PerfilUsuario from "../pages/Usuarios/PerfilUsuario/PerfilUsuario"
import MainPage from "../pages/MainPage/MainPage.jsx"
import ActividadReciente from "../pages/Actividad/ActividadReciente/ActividadReciente.jsx"
import AlertasActivas from "../pages/Alertas/AlertasActivas/AlertasActivas"
import ShowAlerta from "../pages/Alertas/ShowAlerta/ShowAlerta.jsx"



export default function Routing() {
    return(
        <>
        <BrowserRouter>
        <Navbar/>
        <Routes>
            <Route path= "/estadisticas" element = {<Estadisticas/>}></Route>
            <Route path= "/" element = {<LandingPage/>}></Route>
            <Route path= "/usuarios" element = {<Usuarios/>}></Route>
            <Route path= "/agregar-usuario" element = {<AgregarUsuario/>}></Route>
            <Route path= "/login" element = {<Login/>}></Route>
            <Route path="/usuarios/:nombre" element = {<PerfilUsuario/>}></Route>
            <Route path= "/main-page" element = {<MainPage/>}></Route>
            <Route path= "/actividad-reciente" element = {<ActividadReciente/>}></Route>
            <Route path= "/alertas" element = {<AlertasActivas/>}></Route>
            <Route path="/alertas/:id" element = {<ShowAlerta/>}></Route>
        </Routes>
        
        </BrowserRouter>
        </>
    )
}