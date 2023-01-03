import { LatLngTuple } from "leaflet";
import { Reducer } from "redux";
import * as mapActionTypes from "./action-types";
import * as mapActions from "./actions";

interface MapState {
  from: LatLngTuple;
  to: LatLngTuple;
  route: LatLngTuple[];
  isError: boolean;
}

type MapAction =
  | ReturnType<typeof mapActions.setFromToPoints>
  | ReturnType<typeof mapActions.setRoute>
  | ReturnType<typeof mapActions.setError>;

const initialState: MapState = {
  from: [59.84660399, 30.29496392],
  to: [59.84660399, 30.29496392],
  route: [],
  isError: false,
};

export const reducer: Reducer<MapState, MapAction> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case mapActionTypes.SET_FROM_TO_POINTS: {
      const { from, to } = action.payload;

      return { ...state, from, to, route: [] };
    }

    case mapActionTypes.SET_ROUTE: {
      return { ...state, route: action.payload, isError: false };
    }

    case mapActionTypes.SET_ERROR: {
      return { ...state, isError: true };
    }

    default:
      return state;
  }
};
