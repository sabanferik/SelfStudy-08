// import {createStore} from "redux";
import {combineReducers, legacy_createStore as createStore} from "redux";
import { counterReducer } from "../redux/reducers/counterReducer";
import { todoReducer } from "./todoReducer";

// export const store = createStore(counterReducer)

//! birden fazla reducer olduğunda bunları store birleştirerek verebiliriz
const rootReducer = combineReducers({
    counter:counterReducer,
    todo:todoReducer,
})
export const store = createStore(rootReducer)
