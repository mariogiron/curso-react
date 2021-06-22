function Lista({ series }) {

    return <div className="series">
        {series.map(serie => (
            <div className="serie">
                <h3>{serie.titulo}</h3>
                <p>{serie.protagonista}</p>
                <img src={serie.imagen} />
            </div>
        ))}
    </div>
}

export default Lista;