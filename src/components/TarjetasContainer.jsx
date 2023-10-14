import './TarjetasContainer.css'
import { Tarjeta } from './Tarjeta'

async function Getrick() {
    const lista = [];
    for(let i = 1; i < 5; i++){
        console.log(i);
        const api_call = await fetch("https://rickandmortyapi.com/api/character/"+i);
        const data = await api_call.json();
        lista.push(data);
    }
    console.log(lista);
    return lista;
 }

const tarjetas_for = () =>{
    const lista =[];
    Getrick()
    let imagen_url = "https://rickandmortyapi.com/api/character/avatar/1.jpeg"
    for (let i = 0; i < 4; i++){
        lista.push(<Tarjeta imagen={imagen_url} />)
    }
    return lista
};



export function TarjetasContainer(){
    return(
        <>
            <main>
                {tarjetas_for()}
            </main>
        </>
    )
}