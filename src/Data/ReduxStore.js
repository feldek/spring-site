import {combineReducers, createStore} from "redux";
import ContentReducer from "./ContentReducer"


let reducers = combineReducers({
    content: ContentReducer,

});

let store = createStore(reducers);


export default store;