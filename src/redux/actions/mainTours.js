import {placesGetMethod} from '../../api/request'
import {SET_TOURS_DATA,DELETE_TOUR} from './types'

export const mainTours = () => (dispatch, getState) => {
    placesGetMethod()
        .then(res =>{
            if(res && !res.errorMessage){
                dispatch(setToursData({tours:res},SET_TOURS_DATA))
            }else{
                dispatch(setToursData(res,SET_TOURS_DATA))
            }
        })
}
export const deleteTour = (tours,id) => (dispatch, getState) => {

    const newTours = tours.filter((tour)=> (tour.id !==id));
    dispatch(setToursData({tours:newTours},DELETE_TOUR))
    return newTours;
}

const setToursData = (data,type) => {
    return {
        type: type,
        payload: data
    }
}