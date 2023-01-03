import { applyMiddleware, combineReducers, createStore } from "redux";
import createSagaMiddleware from "redux-saga";
import { directionsReducer } from "./directions";
import { mapReducer } from "./map";
import { rootSaga } from "./root-saga";

const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({
  directions: directionsReducer,
  map: mapReducer,
});

export const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);

export type RootState = ReturnType<typeof rootReducer>;
