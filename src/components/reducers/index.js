import {combineReducers} from 'redux'
import articleReducer from './article'
import commentReducer from './comments'


const Reducers = combineReducers({
    article: articleReducer,
    comment: commentReducer
})


export default Reducers

