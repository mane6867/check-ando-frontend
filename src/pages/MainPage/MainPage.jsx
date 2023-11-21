import './MainPage.css'
export default function MainPage (){
    return(
        <div className= "container-mainpage"> 
            <div className="item1">
                <div className="elementos">
                    <div className="titulo1">ACTIVIDAD RECIENTE</div>
                    <div className="rectangulo1">
                        <div className="rectangulos-pequenos">
                            <div class="card-main">
                                <div class="textBox">
                                <div class="textContent">
                                  <p class="h1-main">Daniel Fuentealba</p>
                                  <span class="span-main">8 min atrás</span>
                                </div>
                                <p class="p-main">Se ha registrado en el Checkpoint 5.</p>
                                </div>
                            </div>
                            <div class="card-main">
                                <div class="textBox">
                                <div class="textContent">
                                  <p class="h1-main">Carmen Silva</p>
                                  <span class="span-main">15 min atrás</span>
                                </div>
                                <p class="p-main">Se ha registrado en el Checkpoint 2.</p>
                                </div>
                            </div>
                            <div class="card-main">
                                <div class="textBox">
                                <div class="textContent">
                                  <p class="h1-main">Roberto Vásquez </p>
                                  <span class="span-main">16 min atrás</span>
                                </div>
                                <p class="p-main">Se ha registrado en el Checkpoint 2.</p>
                                </div>
                            </div>
                            <div class="card-main">
                                <div class="textBox">
                                <div class="textContent">
                                  <p class="h1-main">Camila Ogas </p>
                                  <span class="span-main">25 min atrás</span>
                                </div>
                                <p class="p-main">Se ha registrado en el Checkpoint 4.</p>
                                </div>
                            </div>
                            <button type="button" class="btn btn-light mt-3" >Explorar</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="item2">
                <div className="elementos">
                    <div className="titulo2">ALERTAS</div>
                    <div className="rectangulo2">
                    <div className="rectangulos-pequenos">
                            <div class="card-main">
                                <div class="textBox">
                                    <div class="textContent">
                                      <p class="h1-main">Antonella Montti</p>
                                      <span class="span-main">9h atrás</span>
                                    </div>
                                    <p class="p-main">No se ha registrado en ningún Checkpoint hace 5h.</p>
                                </div>
                            </div>
                            <div class="card-main">
                                <div class="textBox">
                                <div class="textContent">
                                  <p class="h1-main">Martina Leppe</p>
                                  <span class="span-main">20h atrás</span>
                                </div>
                                <p class="p-main">No se ha registrado en ningún Checkpoint hace 6h.</p>
                                </div>
                            </div>
                            <div class="card-main">
                                <div class="textBox">
                                <div class="textContent">
                                  <p class="h1-main">Matias Rojas </p>
                                  <span class="span-main">32h atrás</span>
                                </div>
                                <p class="p-main">No se ha registrado en ningún Checkpoint hace 4.5h.</p>
                                </div>
                            </div>
                            <div class="card-main">
                                <div class="textBox">
                                <div class="textContent">
                                  <p class="h1-main">Bruno Flores </p>
                                  <span class="span-main">40h atrás</span>
                                </div>
                                <p class="p-main">No se ha registrado en ningún Checkpoint hace 8h.</p>
                                </div>
                            </div>
                            <button type="button" class="btn btn-light mt-3" >Explorar</button>
                        </div>
                        
                    </div>
                </div>
            </div>
            <div className="item3">
                <div className="image-container">
                        <div className='img'></div>
                </div>    
                <div className='elementos-column3'>
                    <div className="titulo-pulseras">Usuarios activos: 121</div>
                    <div className="titulo-pulseras">Alertas recibidas: 2</div>
                </div>
                
            </div>
        </div>
        )
}