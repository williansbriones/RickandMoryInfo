import './Tarjeta.css'
 

export function Tarjeta({nombre, status, especie, gender, imagen, location}){
    return(
        <>
            <div className='Tarjeta-contenedor'>
                <img className='imagen' src={imagen} alt="rick" />
                <div className='text-container'>
                    <h6 className='texto'>Nombre: {nombre}</h6>
                    <h6 className='texto'>Status: {status}</h6>
                    <h6 className='texto'>Especie: {especie}</h6>
                    <h6 className='texto'>Genero: {gender}</h6>
                    <h6 className='texto'>Locación: {location}</h6>
                </div>
            </div>
        </>
    );
}