import { LatLngTuple } from "leaflet";
import { useEffect } from "react";
import { useMap } from "react-leaflet";

type Bounds = [LatLngTuple, LatLngTuple];

interface Props {
  bounds: Bounds;
}

export const ZoomToViewBounds = ({ bounds }: Props) => {
  const map = useMap();

  useEffect(() => {
    map.fitBounds(bounds);
  }, [map, bounds]);

  return null;
};
