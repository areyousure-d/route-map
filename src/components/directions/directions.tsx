import { useSelector } from "react-redux";
import { DirectionItem } from "@/components/direction-item";
import { directionsSelectors } from "@/store/directions";
import styles from "./directions.module.scss";

export const Directions = () => {
  const directions = useSelector(directionsSelectors.directions);

  return (
    <ul className={styles.list}>
      {directions.map((direction) => (
        <DirectionItem key={direction.id} direction={direction} />
      ))}
    </ul>
  );
};
