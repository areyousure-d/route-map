import { createSlice } from "@reduxjs/toolkit";
import * as reducers from "./reducers";
import { DirectionsState } from "./types";

const initialState: DirectionsState = {
  directions: [
    {
      id: 1,
      from: [59.84660399, 30.29496392],
      to: [59.82934196, 30.42423701],
      selected: false,
    },
    {
      id: 2,
      from: [59.82934196, 30.42423701],
      to: [59.82761295, 30.41705607],
      selected: false,
    },
    {
      id: 3,
      from: [59.83567701, 30.38064206],
      to: [59.84660399, 30.29496392],
      selected: false,
    },
    {
      id: 4,
      from: [59.84660399, 30.29496392],
      to: [59.82761295, 30.41705607],
      selected: false,
    },
    {
      id: 5,
      from: [59.83567701, 30.38064206],
      to: [59.84660399, 30.29496392],
      selected: false,
    },
    {
      id: 6,
      from: [59.871078, 29.908846],
      to: [59.981203, 30.284436],
      selected: false,
    },
    {
      id: 7,
      from: [59.871078, 29.908846],
      to: [47.204588, 142.726489],
      selected: false,
    },
  ],
};

export const directionsSlice = createSlice({
  name: "directions",
  initialState,
  reducers: {
    selectDirection: reducers.selectDirection,
  },
});

export const directionsActions = directionsSlice.actions;
export const directionsReducer = directionsSlice.reducer;
