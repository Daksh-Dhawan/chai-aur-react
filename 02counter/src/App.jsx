import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter, setCounter] = useState(10)
  // let counter = 5

  function addValue() {
    if(counter < 20) setCounter(counter + 1)

      // if we'll have repeated this setCounter thing, then what will happen? Guess.
      // setCounter(counter + 1)
      // setCounter(counter + 2)
      // setCounter(counter - 1)
      // setCounter(counter + 5)

      // It'll do the same thing i.e. increase counter by 1.
      // Coz acc to the optimised fiber algo, the instruction will go in batches
      // And then it'll analyse that same task is being executed so it'll do that only.
      // BASICALLY JO LAST MEIN SETCOUNTER DOGE WOHI EXECUTE HOGA!

      // But if you really wanna increase the counter again n again within here...

      setCounter((prevCounter)=> prevCounter + 1)
      setCounter(prevCounter => prevCounter + 1)
      setCounter(prevCounter => prevCounter + 1)

      // Callback ki wajah se pehle wo prev wale ko execute karega then aage wala hoga to hamara kaam ban jaega!
  }

  function removeValue() {
    if(counter > 0) setCounter(counter - 1)
  }

  return (
    <>
      <h1>Chai aur React</h1>
      <h2>Counter value: {counter}</h2>

      <button
      onClick={addValue}
      >Add Value</button>
      <br />
      <button
      onClick={removeValue}
      >Remove Value</button>
    </>
  )
}

export default App
