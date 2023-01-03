import { LatLngTuple } from "leaflet";

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
      return { error: true };
    }

    const data = await response.json();

    if (data?.routes[0]?.legs[0]?.steps) {
      const steps = data.routes[0].legs[0].steps;
      const route = [];

      for (const step of steps) {
        route.push(...step.geometry.coordinates);
      }

      const newRoute = route.map((coord) => {
        return [coord[1], coord[0]];
      });

      return { route: newRoute } as { route: LatLngTuple[] };
    }

    return { error: true };
  } catch (error) {
    return { error: true };
  }
};
