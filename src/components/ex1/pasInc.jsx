function PasInc({ setPasInc }) {
    return (
        <div>
            <h2>pas d'incrementation</h2>
            <button onClick={() => setPasInc(1)}>1</button>
            <button onClick={() => setPasInc(2)}>2</button>
            <button onClick={() => setPasInc(3)}>3</button>
            <button onClick={() => setPasInc(4)}>4</button>

        </div>
    );
}
export default PasInc;