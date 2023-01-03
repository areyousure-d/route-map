import { put, takeEvery } from "redux-saga/effects";
import { directionsActions, directionsActionTypes } from "../directions";
import * as mapActions from "./actions";

function* setFromToPoints({
  payload,
}: ReturnType<typeof directionsActions.selectDirection>) {
  yield put(mapActions.setFromToPoints(payload));
}

export function* watchDirectionSelect() {
  yield takeEvery(directionsActionTypes.SELECT_DIRECTION, setFromToPoints);
}
