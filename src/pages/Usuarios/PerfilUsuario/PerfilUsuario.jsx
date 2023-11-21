import React from 'react';
import { useParams } from 'react-router-dom';

export default function PerfilUsuario(){

    const { nombre } = useParams();

    return(
        <div>Perfil {nombre}</div>
    )
}