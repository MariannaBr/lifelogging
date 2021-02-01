import firebase from "firebase/app"
import "firebase/auth"
import "firebase/firestore"
import 'firebase/analytics'
import 'firebase/functions'

const firebaseConfig = {
    apiKey: "AIzaSyD61dFVqFCDh029N8Rr_PQjhJg5xAFOcRk",
    authDomain: "lifelogging-20c8a.firebaseapp.com",
    projectId: "lifelogging-20c8a",
    storageBucket: "lifelogging-20c8a.appspot.com",
    messagingSenderId: "111948075126",
    appId: "1:111948075126:web:318b732adea514f32a0f57",
    measurementId: "G-TRMZ4QPD92"
  }
  
  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig)
  }
  

  export default firebase