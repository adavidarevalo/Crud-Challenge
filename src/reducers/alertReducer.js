import {
  SHOW_ALERT,
  SHOW_DELETE
} from "../types/index"

const firstState = {
  alert: null
}

// eslint-disable-next-line 
export default function(state=firstState, action){
  switch (action.type) {
    case SHOW_ALERT:
      return{
        ...state,
        alert: action.payload
      }
    case SHOW_DELETE:
      return{
        ...state,
        alert: null
      }
    default:
      return state;
  }
}