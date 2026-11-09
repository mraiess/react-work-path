import React, { useState } from 'react';
import Valeur from './valeur';
import PasDec from './pasDec';
import PasInc from './pasInc';
function Counter() {
    const [counter, setCounter] = useState(0);
    const [pasInc, setPasInc] = useState(1);
    const [pasDec, setPasDec] = useState(1)
    const add = () => setCounter(c => c + pasInc)
    const min = () => setCounter(c => c - pasDec)
    const reset = () => {
        setCounter(0);

    }
    return (
        <div>
            <h2>counter</h2>
            <Valeur counter={counter} />
            <div>
                <button onClick={add}>incrementer</button>
                <button onClick={min}>decrementer</button>
                <button onClick={reset}>reset</button>

                <PasInc setPasInc={setPasInc} />
                <PasDec setPasDec={setPasDec} />
            </div>
        </div>
    );



}
export default Counter ;
