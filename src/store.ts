import { createStore, applyMiddleware, compose } from "redux";
import { reducers } from "./reducers/index";

// create the store
export const store = createStore(reducers);

// export
export type AppState = ReturnType<typeof reducers>