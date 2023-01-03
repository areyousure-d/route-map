import { combineReducers, createStore } from "redux";
import { directionsReducer } from "./directions";

const rootReducer = combineReducers({
  directions: directionsReducer,
});

export const store = createStore(rootReducer);

export type RootState = ReturnType<typeof rootReducer>;
