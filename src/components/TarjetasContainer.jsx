import './TarjetasContainer.css'
import { Tarjeta } from './Tarjeta'
import axios from 'axios'
import { useEffect } from 'react';
import { useState } from 'react';



export function TarjetasContainer(){
    const [lista, setLista] = useState([]);
    const getrick = () =>{
            axios.get("https://rickandmortyapi.com/api/character").then((value) => setLista(value.data.results))
        
    }
    useEffect(() => {
        getrick();
    },[setLista]);

    const tarjetas_for = () =>{
        let list = [];
        console.log(lista);
        var arrlist = Object.values(lista);
        //console.log(arrlist);
        for (let index = 1; index < 5; index++) {
            list.push(<Tarjeta
            key={index}
            imagen={arrlist[index].image}
            nombre={arrlist[index].name}
            status={arrlist[index].status}
            especie={arrlist[index].especie}
            />)
        }
        return list
    };


    return(
        <>
            <main>
                {lista.length ? tarjetas_for(): <div>holas</div>}
            </main>
        </>
    )
}