import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import Card from './components/Card'

const App = () => {
   const [info,setInfo] =useState([]);
    // const data = async()=>{
    //    const response = await fetch('http://localhost:8080/api/about');
    //    const r = await response.json();
    //    setInfo(r);
     
    // }
  useEffect(()=>{
        // data();
        axios.get("http://localhost:8080/api/about")
        .then((res)=>{
            setInfo(res.data)
        })
        .catch((err)=>{
            console.log(err);
            
        })
  },[])
  return (
    <div className="container">
      {info.length === 0 ? (
        <p>No data available yet — make sure the backend is running at <code>http://localhost:8080</code></p>
      ) : (
        info.map((elem) => (
          <Card key={elem.id} student={elem} />
        ))
      )}
    </div>
  )
}

export default App