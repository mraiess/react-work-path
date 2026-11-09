function PasDec({ setPasDec }) {
    return (
        <div>
            <h2>pas de décrémentation</h2>

            <button onClick={() => setPasDec(1)}>1</button>
            <button onClick={() => setPasDec(2)}>2</button>
            <button onClick={() => setPasDec(3)}>3</button>
            <button onClick={() => setPasDec(4)}>4</button>
        </div>);
}
export default PasDec ;