import { LatLngExpression } from "leaflet";

export interface Direction {
  id: number;
  from: LatLngExpression;
  to: LatLngExpression;
  selected: boolean;
}
