import { RootState } from "../store";

export const fromToPoints = (state: RootState) => {
  const { from, to } = state.map;

  return { from, to };
};

export const route = (state: RootState) => state.map.route;

export const isError = (state: RootState) => state.map.isError;
