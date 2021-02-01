import "tailwindcss/tailwind.css"
import "../styles/globals.css"
import { Provider } from 'react-redux'
import store from '../redux/store'
import initAuth from "../utils/initAuth"

initAuth()

function MyApp({ Component, pageProps}) {
    return (
        < Provider store={store}>
            < Component {...pageProps} />
        </Provider>
    )
}

export default MyApp