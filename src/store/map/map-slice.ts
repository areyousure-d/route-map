import { createSlice } from "@reduxjs/toolkit";
import * as reducers from "./reducers";
import { MapState } from "./types";

const initialState: MapState = {
  from: null,
  to: null,
  route: [],
  isError: false,
  isLoading: false,
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
