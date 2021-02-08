import { combineReducers } from "redux"
import cellReducer from "./cellReducer"
import { firestoreReducer } from 'redux-firestore'

const rootReducer = combineReducers({
    categories: cellReducer,
    firestore: firestoreReducer
})

export default rootReducer