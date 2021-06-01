import { Component } from "react";

class Contador extends Component {

    constructor(props) {
        super(props);
        this.state = {
            numero: 0
        }
    }

    manejarClick = (event, aumentar) => {
        this.setState({
            numero: aumentar ? this.state.numero + 1 : this.state.numero - 1
        });
    }

    render() {
        return (
            <div className="contador">
                <h3>Contador</h3>
                <p>Valor número: {this.state.numero}</p>
                <button onClick={(event) => this.manejarClick(event, true)}>+</button>
                <button onClick={(event) => this.manejarClick(event, false)}>-</button>
            </div>
        );
    }
}

export default Contador;