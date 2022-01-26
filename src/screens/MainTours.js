import React, {useEffect, useState} from 'react'
import Loading from './Loading'
import Tours from './Tours'
import {mainTours,deleteTour} from '../redux/actions/mainTours'
import {useSelector,useDispatch} from 'react-redux'
const MainTours = () => {
    const {toursData} = useSelector((state)=>state.mainTours)
    const [loading, setLoading] = useState(true);
    const [tours, setTours] = useState([]);
    const dispatch = useDispatch();
  
    const removeTour = (id) => {
    let response = dispatch(deleteTour(tours,id))
    setTours(response)
    }

    useEffect(()=>{
      dispatch(mainTours())
    },[])

    useEffect(()=>{
      fetchTours()
    },[toursData])
  
    const fetchTours = async () =>{
      setLoading(true)
      if (toursData && !toursData.errorMessage && toursData.tours) {
        setTours(toursData.tours)
      }else{
        console.log(toursData)
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
              <button className='btn' onClick={()=> dispatch(mainTours())}>refresh</button>
            </div>
          </main>
        }
        
      }
}

export default MainTours
