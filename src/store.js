import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import RootReducer from './components/reducers'



const Middleware = [thunk]

const initailState = {}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(RootReducer,
    initailState,
    composeEnhancers(applyMiddleware(...Middleware))
)


export default store