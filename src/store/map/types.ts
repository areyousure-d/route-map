import { LatLngTuple } from "leaflet";

export type MapState = {
  from: LatLngTuple | null;
  to: LatLngTuple | null;
  route: LatLngTuple[];
  isError: boolean;
  isLoading: boolean;
};
