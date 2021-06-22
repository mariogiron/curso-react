import { useState } from "react";

const MostrarCosas = () => {

    const [mostrar, setMostrar] = useState(true);

    const cambioMostrar = () => {
        setMostrar(!mostrar);
    }

    return (
        <div>
            <p>{mostrar.toString()}</p>
            <button onClick={cambioMostrar}>Mostrar o No</button>
            {(() => {
                if (mostrar) {
                    return <p>Párrafo que se muestra o no</p>;
                } else {
                    return <p>NO SE MUESTRA</p>;
                }
            })()}
            {mostrar && <p>Párrafo chachipistachi</p>}
        </div>
    );

}

export default MostrarCosas;