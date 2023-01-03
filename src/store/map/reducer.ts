import { LatLngExpression } from "leaflet";
import { Reducer } from "redux";
import * as mapActionTypes from "./action-types";
import * as mapActions from "./actions";

interface MapState {
  from: LatLngExpression;
  to: LatLngExpression;
}

type MapAction = ReturnType<typeof mapActions.setFromToPoints>;

const initialState: MapState = {
  from: [0, 0],
  to: [0, 0],
};

export const reducer: Reducer<MapState, MapAction> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case mapActionTypes.SET_FROM_TO_POINTS: {
      const { from, to } = action.payload;

      return { ...state, from, to };
    }

    default:
      return state;
  }
};
