import { createStore } from 'redux'
import { motionReducer } from './reducer'

const store = createStore(motionReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
export default store