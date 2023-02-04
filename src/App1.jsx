import React, { useState } from 'react'



const App1 = () => {

  const [data, setdata] = useState([
    {id:'1', name: 'Rahul'}, 
    {id:'2', name: 'hello'},
    {id:'3', name: 'wow'}
    ])

  const DeleteItem = (id) =>{
    const newData = data.filter(e=>e.id!==id)
    setdata(newData)
  }
  
  return (
    <div className="App1">
      <h1>Rahul Kumar Jha</h1>
      {
        data.map(data=>
        <div>
          <ul>
            <li style={{'display' : 'inline', 'marginRight' : '10px'}}>{data.name}</li>
            <button onClick={()=>DeleteItem(data.id)}>Delete</button>
          </ul>
        </div>
        )
      }
    </div>
  )
}

export default App1