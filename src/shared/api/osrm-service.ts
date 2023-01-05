import { LatLngTuple } from "leaflet";
import { Left, Right } from "../utils/either";
import { OSRMDataSchema } from "./osrm-data-schema";

const URL = "https://router.project-osrm.org/route/v1/driving";

const getUrlWithCoordinates = ({
  from,
  to,
}: {
  from: LatLngTuple;
  to: LatLngTuple;
}) => {
  return `${URL}/${from[1]},${from[0]};${to[1]},${to[0]}?overview=false&alternatives=false&geometries=geojson&steps=true`;
};

export const getRoute = async ({
  from,
  to,
}: {
  from: LatLngTuple;
  to: LatLngTuple;
}) => {
  try {
    const response = await fetch(getUrlWithCoordinates({ from, to }));

    if (response.status !== 200) {
      return Left({ error: true });
    }

    const data = await response.json();

    const parsedData = OSRMDataSchema.parse(data);
    const steps = parsedData.routes[0]?.legs[0]?.steps;

    if (steps) {
      return Right(getFormattedRoute(steps));
    }

    return Left({ error: true });
  } catch (error) {
    return Left({ error: true });
  }
};

type Steps = {
  geometry: {
    coordinates: [number, number][];
  };
}[];

type LngLatTuple = [number, number];

const getFormattedRoute = (steps: Steps) => {
  const route: Array<[number, number]> = [];

  for (const step of steps) {
    route.push(...step.geometry.coordinates);
  }

  const formattedRoute = route.map((coord) => {
    return [coord[1], coord[0]] as LngLatTuple;
  });

  return { route: formattedRoute };
};
