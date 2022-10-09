import React, { useState, useEffect } from 'react'
import Navbar from './Navbar.js'
import Forms from './Forms.js'



function App() {

  const [data, setData] = useState ([{}])

 useEffect(() => {
  fetch("http://localhost:5000/create").then(
    res => res.json()
  ).then(
    data => {
      setData(data)
      console.log(data)
    }
  )
 },[])


  return (
    <div>
      <Navbar />
      <Forms />
    </div>
    

  )
}

export default App