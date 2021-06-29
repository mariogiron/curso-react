const initialState = {
    contador: 12,
    mensaje: 'mensaje inicial'
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'AUMENTO_CONTADOR': {
            return {
                ...state, contador: state.contador + 1
            }
        }
        case 'DECREMENTO_CONTADOR': {
            return {
                ...state, contador: state.contador - 1
            }
        }
        case 'CHANGE_MENSAJE': {
            return {
                ...state, mensaje: action.value
            }
        }
    }
    return state;
}

export default reducer;