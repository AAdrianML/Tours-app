import React, { useState, useEffect } from 'react'
import Loading from './Loading'
import Tours from './Tours'
const url = 'https://course-api.com/react-tours-project'

function App() {
  const [loading, setLoading] = useState(true);
  const [tours, setTours] = useState([]);

  useEffect(()=>{
    fetchTours()
  },[])

  const fetchTours = async () =>{
    setLoading(true)
    let response = await fetch(url)
    .then((res)=>{
      return res
    })
    .catch((err)=>{
      return {err:err, errorMessage:`fetchTours error: ${err.message ? err.message : ''}`}
    })
    if (response && !response.errorMessage) {
      response = await  response.json();
      setTours(response)
      console.log(response)
    }else{
      console.log(response)
    }
    setLoading(false)
  }

  if (loading) {
    return <main><Loading/></main>
  }else{
    return <main><Tours tours={tours}/></main>
  }
}

export default App
