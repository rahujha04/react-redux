import React, { useState } from 'react'

const App2 = () => {
  const [counter, setCounter] = useState(0);

  const CountClicks = () =>{
    setCounter(counter + 1);
  }
  return (
    <>
      <h1>{counter}</h1>
      <button onClick={CountClicks}>Click</button>
    </>
  )
}

export default App2