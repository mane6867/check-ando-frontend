import { useState } from "react"

export default function UserWelcome (){
    const [nombre, setNombre] = useState(null)

    function handleChange(nombre) {
        setNombre(nombre)
    }
    return(
        <>
        <h2>Hola chori</h2>
        <input onChange={e=> handleChange(e.target.value)}></input>
        <p>Nombre: {nombre}</p>
        </>
    )
}