import { useState } from 'react';
function Counter() {
    const [counter, setCounter] = useState(0);
    const [pasInc, setPasinc] = useState(1)
    const [pasdec, setPasdec] = useState(-1)

    let add = () => {
        setCounter(counter + pasInc)
    }
    let min = () => {
        setCounter(counter + pasdec)
    }
    let reset = () => {
        setCounter(0)
        setPasinc (0)
        setPasdec (-1)
    }

    // let addp = () => {
    //     setPas(pas + 2)
    // }
    // let minp = () => {
    //     setPas(pas - 2)
    // }
    // let resetp = () => {
    //     setPas(2)
    // }

    return (
        <div>

            <h2>counter</h2>
            <input type="text" id="input" value={counter} /> <br />
            <button onClick={add}>incrementer</button><br />
            <button onClick={min}>decrementer</button><br />
            <button onClick={reset}>reset</button>
            <h2>les Pas </h2>
            {/* <button onClick={addp}>incrementer</button><br />
            <button onClick={minp}>decrementer</button><br />
            <button onClick={resetp}>reset</button> */}

            <h2>pas d'incrementation</h2>
            <button onClick={() => setPasinc(1)}>1</button> 
            <button onClick={() => setPasinc(2)}>2</button> 
            <button onClick={() => setPasinc(3)}>3</button> 
            <button onClick={() => setPasinc(4)}>4</button> 
            <h2>pas d'incrementation</h2>
            <button onClick={() => setPasdec(-1)}>1</button> 
            <button onClick={() => setPasdec(-2)}>2</button> 
            <button onClick={() => setPasdec(-3)}>3</button> 
            <button onClick={() => setPasdec(-4)}>4</button> 

        </div>


    );
}
export default Counter;




