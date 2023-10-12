import './Buscador.css'
import LogoBuscadro from '../images/GifBuscador.gif'


export function Buscador(){
    document.addEventListener('click', Event => {
        let lista = document.getElementById('lista-buscador');
        if(String(Event.composedPath(0)[0]) != "[object HTMLInputElement]" && lista.style.display == "block"){
            lista.style.display = "none";
        }
    
    });
    function elselect(){
        console.log("prueva");
        let lista = document.getElementById('lista-buscador');
        if(lista.style.display == "none"){
            lista.style.display = "block";
        }else if(lista.style.display == "block"){
            lista.style.display = "none";
        }else{
            lista.style.display = "block";
        }
    };
    return(
        <>
            <div className='box-buscador'>
                <input onClick={elselect} type="text" placeholder='Nombre/Id/Episode' />
                <img src={LogoBuscadro} alt="LogoBuscador" />
            </div>
            <div className='container-list'>
                <div id='lista-buscador'></div>
            </div>
        </>
    );
}



