import { connect } from 'react-redux';

function Contador({ cont, msg }) {
    return <div>
        <p>Valor del contador: {cont}</p>
        <p>Valor del mensaje: {msg}</p>
    </div>
}

const mapStateToProps = state => {
    return {
        cont: state.contador,
        msg: state.mensaje
    }
}

export default connect(mapStateToProps)(Contador);