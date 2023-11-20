import './Navbar.css'
import { Link, useMatch, useResolvedPath , useNavigate} from "react-router-dom"
import React, { useContext, useState, useEffect }  from "react";

export default function Navbar (){
    return(
    <nav className="nav">
        {/* Aqui generaremos todos los menús */}
        {/* Los links o customlinks son los menús */}
        {/* <Link to="/" className="site-title"><img src="logo.png" /></Link> */}
        <Link to="/" className="site-title">CHECK-ANDO</Link>
        <ul>
            {/* <CustomLink to="/path_que_mostrará">Nombre_visible_en_navbar</CustomLink> */}
            
            <CustomLink to="/estadisticas">Estadísticas</CustomLink>
            <CustomLink to="/usuarios">Usuarios</CustomLink>

            
        </ul>
        
    </nav>
    )
}

// La siguiente función es para ver si un link está activo o no (un menu)
function CustomLink({to, children, ...props}){
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({ path: resolvedPath.pathname, end: true})
    return (
        <li className={isActive ? "active" : ""}>
            <Link to= {to} {...props}>
                {children}
            </Link>
        </li>
    )
}