import { LatLngTuple } from "leaflet";
import { useEffect } from "react";
import { useMap } from "react-leaflet";

type Bounds = [LatLngTuple | null, LatLngTuple | null];

type Props = {
  bounds: Bounds;
};

const isBounds = (bounds: Bounds): bounds is [LatLngTuple, LatLngTuple] => {
  if (bounds[0] !== null && bounds[1] !== null) {
    return true;
  }
  return false;
};

export const ZoomToViewBounds = ({ bounds }: Props) => {
  const map = useMap();

  useEffect(() => {
    if (isBounds(bounds)) {
      map.fitBounds(bounds);
    }
  }, [map, bounds]);

  return null;
};
