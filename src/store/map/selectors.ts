import { RootState } from "../store";

export const fromToPoints = (state: RootState) => {
  const { from, to } = state.map;

  return { from, to };
};
