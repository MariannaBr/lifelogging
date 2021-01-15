import { combineReducers } from "redux"
import cellReducer from "./cellReducer"

const rootReducer = combineReducers({
    categories: cellReducer
})

export default rootReducer