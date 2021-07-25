import { combineReducers } from "redux"
import productsReducer from "./productReducer"
import alertReducer from "./alertReducer"

export default combineReducers({
    products: productsReducer,
    alert: alertReducer
})