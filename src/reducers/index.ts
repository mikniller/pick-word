import { combineReducers } from "redux";
import  wordReducer   from "./wordReducer";


// main reducers
export const reducers = combineReducers({
  word: wordReducer,
});