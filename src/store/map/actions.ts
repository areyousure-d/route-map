import { LatLngExpression } from "leaflet";
import * as mapActionTypes from "./action-types";

export const setFromToPoints = ({
  from,
  to,
}: {
  from: LatLngExpression;
  to: LatLngExpression;
}) => {
  return {
    type: mapActionTypes.SET_FROM_TO_POINTS,
    payload: { from, to },
  };
};
