import { combineReducers, createStore } from "redux";
import ContentReducer from "./ContentReducer";
import ValidationReducer from "./ValidationReducer";

let reducers = combineReducers({
  content: ContentReducer,
  validation: ValidationReducer,
});

let store = createStore(reducers);

export default store;
