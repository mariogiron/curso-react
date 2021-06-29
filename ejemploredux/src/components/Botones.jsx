import { connect } from 'react-redux';

function Botones({ onSumar, onRestar, onChangeMensaje }) {

    return <div>
        <button onClick={onRestar}>RESTAR</button>
        <button onClick={onSumar}>SUMAR</button>
        <input
            type="text"
            onChange={event => onChangeMensaje(event.target.value)}
        />
    </div>
}

const mapDispatchToProps = dispatch => {
    return {
        onSumar: () => dispatch({ type: 'AUMENTO_CONTADOR' }),
        onRestar: () => dispatch({ type: 'DECREMENTO_CONTADOR' }),
        onChangeMensaje: (inputValue) => dispatch({
            type: 'CHANGE_MENSAJE',
            value: inputValue
        })
    }
}

export default connect(null, mapDispatchToProps)(Botones);