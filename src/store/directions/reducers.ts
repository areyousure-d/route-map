import { PayloadAction } from "@reduxjs/toolkit";
import { Direction, DirectionsState } from "./types";

export const selectDirection = (
  state: DirectionsState,
  action: PayloadAction<Direction>
) => {
  const newDirections = state.directions.map((direction) => {
    const newDirection = { ...direction };
    newDirection.selected = false;

    if (newDirection.id === action.payload.id) {
      newDirection.selected = true;
    }

    return newDirection;
  });

  state.directions = newDirections;
};
