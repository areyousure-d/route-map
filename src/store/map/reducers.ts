import { PayloadAction } from "@reduxjs/toolkit";
import { LatLngTuple } from "leaflet";
import { MapState } from "./types";

export const setFromToPoints = (
  state: MapState,
  action: PayloadAction<{ from: LatLngTuple; to: LatLngTuple }>
) => {
  state.from = action.payload.from;
  state.to = action.payload.to;
  state.route = [];
};

export const setRoute = (
  state: MapState,
  action: PayloadAction<LatLngTuple[]>
) => {
  state.route = action.payload;
  state.isError = false;
};

export const setError = (state: MapState) => {
  state.isError = true;
};
