import {combineReducers} from "redux";
import extensionReducers from "./extensionReducers";

const rootReducer = combineReducers({
    extensionReducers,
})

export default rootReducer;