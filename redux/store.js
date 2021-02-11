import { createStore, applyMiddleware, compose } from 'redux'
import rootReducer from './reducers'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from "redux-thunk"
import { getFirebase } from 'react-redux-firebase'


const middleware = [thunk.withExtraArgument({ getFirebase })]
//const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
    }) : compose;

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(...middleware)))

export default store

// export default function configureStore(initialState, history) {
//   const middleware = [thunk.withExtraArgument({ getFirebase })]
//   const createStoreWithMiddleware = compose(
//     applyMiddleware(...middleware),
//     typeof window === 'object' &&
//       typeof window.devToolsExtension !== 'undefined'
//       ? () => window.__REDUX_DEVTOOLS_EXTENSION__
//       : f => f
//   )(createStore)
//   const store = createStoreWithMiddleware(rootReducer)
// }