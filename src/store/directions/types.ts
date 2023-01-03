import { LatLngTuple } from "leaflet";

export interface Direction {
  id: number;
  from: LatLngTuple;
  to: LatLngTuple;
  selected: boolean;
}
