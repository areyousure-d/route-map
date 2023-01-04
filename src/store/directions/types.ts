import { LatLngTuple } from "leaflet";

export type Direction = {
  id: number;
  from: LatLngTuple;
  to: LatLngTuple;
  selected: boolean;
};
