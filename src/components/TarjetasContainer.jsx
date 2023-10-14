import './TarjetasContainer.css'
import { Tarjeta } from './Tarjeta'
import axios from 'axios'
import { useEffect } from 'react';
import { useState } from 'react';



export function TarjetasContainer(){
    const [lista, setLista] = useState([]);
    const getrick = () =>{
        let listas = [];
        for (let index = 1; index < 5; index++){
            axios.get("https://rickandmortyapi.com/api/character").then((value) => setLista(value.data.results))
        }
        
    }
    useEffect(() => {
        getrick();
    });

    const tarjetas_for = () =>{
        let list;
        list = lista.map((item) =>{ return <Tarjeta 
                                    key={item.id}
                                    imagen={item.image}
                                    nombre={item.name}
                                    status={item.status}
                                    especie={item.species}
                                    gender={item.gender}
                                    location={item.location.name}
                                    />})

        return list
    };


    return(
        <>
            <main>
                {tarjetas_for()}
            </main>
        </>
    )
}