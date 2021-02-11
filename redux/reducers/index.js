import { combineReducers } from "redux"
import cellReducer from "./cellReducer"
import { firestoreReducer } from 'redux-firestore'
import { firebaseReducer } from 'react-redux-firebase'
import firebase from 'react-redux-firebase/lib/reducer'
import firestore from 'redux-firestore/lib/reducer'


const rootReducer = combineReducers({
    categories: cellReducer,
    firebase: firebaseReducer,
    firestore: firestoreReducer,
})

export default rootReducer