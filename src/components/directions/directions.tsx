import { useSelector } from "react-redux";
import { DirectionItem } from "@/components/direction-item";
import { directionsSelectors } from "@/store/directions";

export const Directions = () => {
  const directions = useSelector(directionsSelectors.directions);

  return (
    <ul>
      {directions.map((direction) => (
        <DirectionItem key={direction.id} direction={direction} />
      ))}
    </ul>
  );
};
