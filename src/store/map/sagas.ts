import { call, fork, put, takeLeading } from "redux-saga/effects";
import { getRoute } from "@/shared/api";
import { Either } from "@/shared/utils/either";
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
  const res: Either<{ error: boolean }, { route: Array<[number, number]> }> =
    yield call(getRoute, {
      from: payload.from,
      to: payload.to,
    });

  if (res.type === "right") {
    yield put(mapActions.setRoute(res.data.route));
  } else {
    yield put(mapActions.setError());
  }
}

function* mapWorker({
  payload,
  type,
}: ReturnType<typeof directionsActions.selectDirection>) {
  yield fork(setFromToPoints, { payload, type });
  yield fork(fetchRoute, { payload, type });
}

export function* watchDirectionSelect() {
  yield takeLeading(directionsActions.selectDirection.type, mapWorker);
}
