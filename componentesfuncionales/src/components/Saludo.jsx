import { useState } from 'react';

function Saludo(props) {

    const [animales, setAnimales] = useState(['perro', 'gato', 'canario', 'burro', 'gallo', 'ornitorrinco']);
    const [mensaje, setMensaje] = useState('Este es el mensaje');

    function handleClick(event) {
        console.log(event);
        setMensaje('Nuevo mensaje');
    }

    return <div>
        <h3>Hola {props.nombre} Qué pasa!</h3>
        <p>{animales.length}</p>
        <p>{mensaje}</p>
        <button onClick={handleClick}>Pulsa!!</button>
    </div>;
}

export default Saludo;