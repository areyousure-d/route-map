import { LatLngTuple } from "leaflet";

export type MapState = {
  from: LatLngTuple;
  to: LatLngTuple;
  route: LatLngTuple[];
  isError: boolean;
};
