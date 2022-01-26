import {SET_TOURS_DATA,DELETE_TOUR} from '../actions/types'

export default (state = {toursData:{}},action) =>{
    switch (action.type) {
        case SET_TOURS_DATA:
          return {
            ...state,
            toursData: action.payload,
          };
        case DELETE_TOUR:
          return{
            ...state,
            toursData: action.payload,
          }
        default:
          return state;
      }
}