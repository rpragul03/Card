import { legacy_createStore as createStore } from "redux";
import allreducerecommerce from "../Reducer/Ecommercecombinereducer";
const store=createStore(allreducerecommerce)

export default store