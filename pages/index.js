import firebase from "firebase/app"
import "firebase/auth"
import "firebase/firestore"

import Header from "../components/Header"

const firebaseConfig = {
    apiKey: "AIzaSyD61dFVqFCDh029N8Rr_PQjhJg5xAFOcRk",
    authDomain: "lifelogging-20c8a.firebaseapp.com",
    projectId: "lifelogging-20c8a",
    storageBucket: "lifelogging-20c8a.appspot.com",
    messagingSenderId: "111948075126",
    appId: "1:111948075126:web:318b732adea514f32a0f57",
    measurementId: "G-TRMZ4QPD92"
  }
  
  firebase.initializeApp(firebaseConfig);

function HomePage() {

    return (
        <div className="bg-gray-900 h-screen">
            <Header />
            <div className="my-32 max-w-7xl mx-auto px-4 sm:px-6 flex justify-start">
                <div className="">
                    <div className="block"><span className="text-9xl leading-none font-serif font-extrabold gradient-text">LIFELOGGING</span></div>
                    <div className="flex justify-end"><span className="gradient-text text-4xl leading-none font-serif font-semibold">use data to understand your body</span></div>
                </div>
            </div>
        </div>
    )
}

export default HomePage