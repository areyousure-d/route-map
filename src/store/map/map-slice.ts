import { createSlice } from "@reduxjs/toolkit";
import * as reducers from "./reducers";
import { MapState } from "./types";

const initialState: MapState = {
  from: [59.84660399, 30.29496392],
  to: [59.84660399, 30.29496392],
  route: [],
  isError: false,
};

const mapSlice = createSlice({
  name: "map",
  initialState,
  reducers: {
    setFromToPoints: reducers.setFromToPoints,
    setRoute: reducers.setRoute,
    setError: reducers.setError,
  },
});

export const mapActions = mapSlice.actions;
export const mapReducer = mapSlice.reducer;
