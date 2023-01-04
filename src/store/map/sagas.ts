import { all, call, put, takeEvery } from "redux-saga/effects";
import { getRoute } from "@/shared/api";
import { directionsActions } from "../directions";
import { mapActions } from "./map-slice";

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
    takeEvery(directionsActions.selectDirection.type, setFromToPoints),
    takeEvery(directionsActions.selectDirection.type, fetchRoute),
  ]);
}
