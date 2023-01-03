import { all, call, put, takeEvery } from "redux-saga/effects";
import { getRoute } from "@/shared/api";
import { directionsActions, directionsActionTypes } from "../directions";
import * as mapActions from "./actions";

function* setFromToPoints({
  payload,
}: ReturnType<typeof directionsActions.selectDirection>) {
  yield put(mapActions.setFromToPoints(payload));
}

function* fetchRoute({
  payload,
}: ReturnType<typeof directionsActions.selectDirection>) {
  const { route } = yield call(getRoute, {
    from: payload.from,
    to: payload.to,
  });

  if (route) {
    yield put(mapActions.setRoute(route));
  } else {
    yield put(mapActions.setError());
  }
}

export function* watchDirectionSelect() {
  yield all([
    takeEvery(directionsActionTypes.SELECT_DIRECTION, setFromToPoints),
    takeEvery(directionsActionTypes.SELECT_DIRECTION, fetchRoute),
  ]);
}
