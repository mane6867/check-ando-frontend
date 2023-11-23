import './GraficoLineas.css'

export default function GraficoLineas(url){

    return(
    <div className="container-lan" >
        <div class="img-grafico-lineas" style={ { backgroundImage: `url(${url})` } }></div>
    </div>
    )
}