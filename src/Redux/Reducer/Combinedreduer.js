import {combineReducers} from 'redux'
import counter from './Counterreducer'
const allreducers=combineReducers({
    Counter:counter
})

export default allreducers