const persona = {
    nombre: 'Rosa',
    apellidos: 'Romero',
    edad: 45
}

function nombreCompleto(pPersona) {
    return `${pPersona.nombre} ${pPersona.apellidos}`;
}

function saludar(pPersona) {
    // if (pPersona) {
    //     return <h2>Hola {nombreCompleto(pPersona)}</h2>;
    // } else {
    //     return <h2>Hola persona desconocida</h2>;
    // }
    return (pPersona) ? <h2>Hola {nombreCompleto(pPersona)}</h2> : <h2>Hola persona desconocida</h2>;
}

const element = saludar();

ReactDOM.render(element, document.getElementById('root'));