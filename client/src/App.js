import React, { useState, useEffect } from 'react'
import ReferDashboard from './components/ReferDashboard'

function App() {
  const [data, setData] = useState([{}])

  useEffect(() => {
    fetch("http://localhost:5000/dashboard").then(
      res => res.json()
    ).then(
      data => {
        setData(data)
        
      }
    )

  }, [])


  return (
    <div>
      <p>American Airlines</p>
      <ReferDashboard data={data}/>
    </div>
  )
}

export default App