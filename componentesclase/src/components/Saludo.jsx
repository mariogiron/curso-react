import { Component } from 'react';

class Saludo extends Component {

    render() {
        return <div>
            <h2>Saludando a {this.props.nombre}</h2>
            <h3>Contenido: {this.props.children}</h3>
        </div>;
    }
}

export default Saludo;