import "tailwindcss/tailwind.css"
import { Provider } from 'react-redux'
import store from '../redux/store'
import HomePage from "."

function MyApp(params) {
    return (
        < Provider store={store}>
            < HomePage />
        </Provider>
    )
}

export default MyApp