import React, { useState, useEffect } from 'react'
import ReferDashboard from './components/ReferDashboard'
import Navbar from './Navbar.js'
import Forms from './Forms.js'



function App() {

  useEffect(() => {
    fetch("http://localhost:5000/dashboard").then(
      res => res.json()
    ).then(
      data => {
        setData(data)
        
      }
    )
  }, [])

//   const [data, setData] = useState ([{}])

//  useEffect(() => {
//   fetch("http://localhost:5000/create").then(
//     res => res.json()
//   ).then(
//     data => {
//       setData(data)
//       console.log(data)
//     }
//   )
//  },[])


  return (
    <div>
      <p>American Airlines</p>
      <ReferDashboard data={data}/>
      <Navbar />
      <Forms />
    </div>
    

  )
}

export default App