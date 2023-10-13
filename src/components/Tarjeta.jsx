import './Tarjeta.css'


export function Tarjeta(nombre, status, epecies, gende, imagen){
    console.log(imagen);
    return(
        <>
            <div className='Tarjeta-contenedor'>
                <img className='imagen' src={imagen} alt="rick" />
                <div>{imagen}</div>
            </div>
        </>
    );
}