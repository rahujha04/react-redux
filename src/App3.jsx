import React, { useState } from 'react'

const options = ["cricket", "football", "hockey"];
const days = ["weekday", "weekend"];

const App3 = () => {

  const [game, setGame] = useState("cricket");

  const [day, setDay] = useState("weekend");

  const handleChangeGame = (event) =>{
    const target = event.target;
    const value = target.value;
    setGame(`${value}`);
  }
  
  const handleChangeDays = (event) =>{
    const target = event.target;
    const value = target.value;
    setDay(`${value}`);
  }
  
  return (
    <>
    <center>
     <h1>Which Game?</h1>
     
     {
      options.map((curVal) =>{
        return (
          <>
           <input type="radio" name="game" value={curVal} onChange={handleChangeGame} checked={curVal===game} />
           <label>{curVal}</label>
          </>
        )
      })
     }

     <h2>You Will Play</h2>

     {
      days.map((curVal)=>{
        return (
          <> 
           <input type="radio" name="days" value={curVal} onChange={handleChangeDays} checked={curVal===day}/>
           <label>{curVal}</label>
          </>
        )
      })
     }

     <p>Your Selected Game is: {game}</p>
     <p>Your Selected Day is: {day}</p>
     </center>
    </>
  )
}

export default App3