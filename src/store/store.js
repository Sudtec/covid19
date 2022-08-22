import {createStore, applyMiddleware, combineReducers} from "redux";
import reduxthunk from "redux-thunk"
import covidReducer from "./reducer";

const middleware = applyMiddleware(reduxthunk);
const combinedreducer = combineReducers({
    covidstats:covidReducer
})
const store = createStore(combinedreducer, middleware);
export default store