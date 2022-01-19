import React, {useEffect, useState} from 'react'
import Loading from './Loading'
import Tours from './Tours'
const url = 'https://course-api.com/react-tours-project'
const MainTours = () => {

    const [loading, setLoading] = useState(true);
    const [tours, setTours] = useState([]);
  
  
    const removeTour = (id) => {
    const newTours = tours.filter((tour)=> (tour.id !==id));
    setTours(newTours)
    }
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
      }else{
        console.log(response)
      }
      setLoading(false)
    }

    if (loading) {
        return <main><Loading/></main>
      }else{
        if (tours && tours.length > 0) {
          return <main><Tours tours={tours} removeTour={removeTour}/></main>
        }else{
          return <main>
            <div className="title">
              <h2>no tours left</h2>
              <button className='btn' onClick={fetchTours}>refresh</button>
            </div>
          </main>
        }
        
      }
}

export default MainTours
