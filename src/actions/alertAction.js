import {
  SHOW_ALERT,
  SHOW_DELETE
} from "../types/index"

export function createAlert(alert){
  return(dispatch) => {
    dispatch(createNewAlert(alert))
    setTimeout(() => {
      dispatch(deleteAlert())
    }, 3000);
  }
}
const createNewAlert = alert =>({
  type: SHOW_ALERT,
  payload: alert
})
const deleteAlert = () => ({
  type: SHOW_DELETE
})