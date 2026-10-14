import {useState} from "react"


function App() {
  const [counter, setCounter] = useState(9);

  function plus() {
    setCounter(counter + 3);
  }
  function moin ()  {
    setCounter(counter -2);
  }
  return (  
    <div>
      <button onClick={plus} > + </button>
      <input type="text" disabled value={counter} />
      <button onClick={moin}  > - </button>
    </div>
  )
}

export default App;
