import "tailwindcss/tailwind.css"
import "../styles/globals.css"
import { Provider } from 'react-redux'
import store from '../redux/store'
import initAuth from "../utils/initAuth"
import firebase from 'firebase/app'
import 'firebase/firestore'
import { ReactReduxFirebaseProvider } from 'react-redux-firebase'
import { createFirestoreInstance } from 'redux-firestore'
import { rrfConfig } from '../utils/rrfConfig'

initAuth()

//const initialState = window && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
//const store = configureStore(initialState)
//firebase.initializeApp(firebaseConfig)

function MyApp({ Component, pageProps}) {
    return (
        <Provider store={store}>
            <ReactReduxFirebaseProvider
                firebase={firebase}
                config={rrfConfig}
                dispatch={store.dispatch}
                createFirestoreInstance={createFirestoreInstance}>
                <Component {...pageProps} />
            </ReactReduxFirebaseProvider>
        </Provider>
    )
}

export default MyApp