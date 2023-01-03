import { LatLngTuple } from "leaflet";
import * as mapActionTypes from "./action-types";

export const setFromToPoints = ({
  from,
  to,
}: {
  from: LatLngTuple;
  to: LatLngTuple;
}) => {
  return {
    type: mapActionTypes.SET_FROM_TO_POINTS,
    payload: { from, to },
  };
};

export const setRoute = (path: Array<LatLngTuple>) => {
  return {
    type: mapActionTypes.SET_ROUTE,
    payload: path,
  };
};

export const setError = () => {
  return {
    type: mapActionTypes.SET_ERROR,
  };
};
