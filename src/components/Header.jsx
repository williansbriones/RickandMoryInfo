import './Header.css'
import {Box, Grid} from '@material-ui/core'
import logo from '../images/logo.png'

export function Cabecera() {
    return(
        <Grid container>
            <Grid item xs={12}>
                <header id='marco'  className="Cabecera">
                    <span id='estrella' className='punto'></span>
                    <Grid container>
                        <Grid item xs={2}>
                            <div className='logo-center'>
                                <img className='logo' src={logo} alt="logo RyM" />
                            </div>
                        </Grid>
                        <Grid item xs={10}>
                            <div className='titulo-box'>
                            <h1 className='titulo'>Rick <span>and</span> morty</h1>
                            </div>
                        </Grid>
                    </Grid>
                </header>
            </Grid>
        </Grid>
    )
}

function ClonarEstrellas(cantidad) {
    var c = document.getElementById("estrella").cloneNode(true);
    let ubicacion = document.getElementById("marco");
    for (let index = 0; index < cantidad; index++) {

        let x = Math.floor(Math.random() * 100);
        let y = Math.floor(Math.random() * 100);
        var clon = c.cloneNode(true);
        clon.style.top = x+"px";
        clon.style.left = y+"%"
        clon.style.zIndex = "0"
        ubicacion.appendChild(clon);
    }
}


window.onload = function () {
    if (screen.width >= 1000) {
        ClonarEstrellas(110);
        console.log(screen.width);
    }else if (screen.width < 1000) {
        ClonarEstrellas(70);
        console.log(screen.width)
    }else{
        ClonarEstrellas(60);
    }
}

  



