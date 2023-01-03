import { all } from "redux-saga/effects";
import { mapSagas } from "./map";

export function* rootSaga() {
  yield all([mapSagas.watchDirectionSelect()]);
}
