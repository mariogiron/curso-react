import { useState } from "react";

function Contador({ aviso }) {
    const [num, setNum] = useState(0);

    function handleClick(event, aumento) {
        if (aumento) {
            setNum(num + 1);
        } else {
            setNum(num - 1);
        }
    }

    if (num % 5 === 0) {
        // console.log('Múltiplo de 5');
        aviso(num);
    }

    return <div className="contador">
        <p>{num}</p>
        <button onClick={event => handleClick(event, false)}>-</button>
        <button onClick={event => handleClick(event, true)}>+</button>
    </div>
}

export default Contador;