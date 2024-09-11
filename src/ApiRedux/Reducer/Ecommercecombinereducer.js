import {combineReducers} from 'redux'
import {setproductsreducer} from './Ecommmercereducer'
import { getproductfromreducer } from './Ecommmercereducer'


const allreducerecommerce=combineReducers({
    SetProductReducer:setproductsreducer,
    GetProductReducer:getproductfromreducer,
  
})

export default allreducerecommerce