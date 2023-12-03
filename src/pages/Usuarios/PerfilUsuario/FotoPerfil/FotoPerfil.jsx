import './FotoPerfil.css'

export default function SectionImage({nombre_usuario}){
    const usuarios1 = [
        { id: 1, nombre: "Magdalena Pino", image: "/mujer-1.jpg"},
        { id: 2, nombre: "Camila Ogas", image: "/mujer-2.jpg"},
        { id: 3, nombre: "Sofía Barraza", image: "/mujer-3.jpg"},
        { id: 4, nombre: "Soledad Bravo", image: "/mujer-4.jpg"},
        { id: 5, nombre: "Isabel Jofré", image: "/mujer-5.jpg"},
        { id: 11, nombre: "Ignacio Saavedra", image: "/hombre-0.jpg"},
        { id: 12, nombre: "Camilo Ogas", image: "/hombre-1.jpg"},
        { id: 13, nombre: "Juan Bodoque", image: "/hombre-2.jpg"},
        { id: 14, nombre: "Andrés Birke", image: "/hombre-3.jpg"},
        { id: 15, nombre: "Esperanza Riquelma", image: "/mujer-6.jpg"},
        { id: 21, nombre: "Magdalena Casas", image: "/mujer-7.jpg"},
        { id: 22, nombre: "Fernando Donoso", image: "/hombre-4.jpg"},
        { id: 23, nombre: "Francisco Vergara", image: "/hombre-5.jpg"},
        { id: 24, nombre: "Isidora Lazo", image: "/mujer-8.jpg"},
        { id: 25, nombre: "Javier Sotomayor", image: "/hombre-6.jpg"},
    ]
    console.log("nombre;", nombre_usuario)

    const usuario = usuarios1.find(usuario => usuario.nombre === nombre_usuario);
    console.log("usuario;", usuario)
    console.log("Magdalena Pino"== nombre_usuario)

    return(
    <div className="container-lan" >
        <div class="img-perfil" style={{backgroundImage: `url(${usuario.image})`}}></div>
    </div>
    )
}