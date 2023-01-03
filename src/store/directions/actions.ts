import { SELECT_DIRECTION } from "./action-types";
import { Direction } from "./types";

export const selectDirection = (direction: Direction) => {
  return {
    type: SELECT_DIRECTION,
    payload: direction,
  };
};
