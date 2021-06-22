import { useState } from "react";

const ListaPersonas = () => {
    const [arrPersonas, setArrPersonas] = useState([
        { id: 1, nombre: 'Mario', apellidos: 'Girón', edad: 34 },
        { id: 2, nombre: 'Pedro', apellidos: 'López', edad: 23 },
        { id: 3, nombre: 'Sofía', apellidos: 'Gómez', edad: 48 }
    ]);

    const borrarPersona = (pId) => {
        // // Copia del array
        // const arrPersonasCopia = [...arrPersonas];
        // // Recupero el índice
        // const index = arrPersonasCopia.findIndex(persona => persona.id === pId);
        // // borro el elemento del array copia
        // arrPersonasCopia.splice(index, 1);
        // setArrPersonas(arrPersonasCopia);

        setArrPersonas(arrPersonas.filter(persona => persona.id !== pId));
    }

    return <div>
        <ul>
            {arrPersonas.map(persona =>
                <li key={persona.id} onClick={(e) => borrarPersona(persona.id)}>
                    {persona.nombre} {persona.apellidos} {persona.edad}
                </li>
            )}
        </ul>
    </div>

}

export default ListaPersonas;