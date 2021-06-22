import { useState } from 'react';

function Formulario({ nuevaSerie }) {

    const [serie, setSerie] = useState({});

    const creaSerie = (event) => {
        event.preventDefault();
        nuevaSerie(serie);
    }

    const changeField = (event) => {
        // console.log(event.target.value, event.target.name)
        // const serieCopia = { ...serie };
        // serieCopia[event.target.name] = event.target.value;
        // setSerie(serieCopia);
        setSerie({
            ...serie,
            [event.target.name]: event.target.value
        });
    }

    return <div className="formulario">
        <div>
            <p>{serie.titulo}</p>
            <p>{serie.protagonista}</p>
            <p>{serie.imagen}</p>
        </div>
        <form onSubmit={creaSerie}>
            <div className="form-group">
                <label>Título</label>
                <input
                    type="text"
                    name="titulo"
                    className="form-control"
                    onChange={changeField}
                />
            </div>
            <div className="form-group">
                <label>Protagonista</label>
                <input
                    type="text"
                    name="protagonista"
                    className="form-control"
                    onChange={changeField}
                />
            </div>
            <div className="form-group">
                <label>Imagen</label>
                <input
                    type="text"
                    name="imagen"
                    className="form-control"
                    onChange={changeField}
                />
            </div>
            <button>Enviar</button>
        </form>
    </div>
}

export default Formulario;