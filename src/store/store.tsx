import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import { directionsReducer } from "./directions";
import { mapReducer } from "./map";
import { rootSaga } from "./root-saga";

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    directions: directionsReducer,
    map: mapReducer,
  },
  middleware: [sagaMiddleware],
  devTools: true,
});

sagaMiddleware.run(rootSaga);

export type RootState = ReturnType<typeof store.getState>;
