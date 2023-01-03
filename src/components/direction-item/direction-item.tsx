import { Button } from "antd";
import { useDispatch } from "react-redux";
import { Direction, directionsActions } from "@/store/directions";
import styles from "./direction-item.module.scss";

interface Props {
  direction: Direction;
}

export const DirectionItem = ({ direction }: Props) => {
  const dispatch = useDispatch();

  const onClick = () => {
    dispatch(directionsActions.selectDirection(direction));
  };

  return (
    <li className={styles["list-item"]}>
      <Button
        onClick={onClick}
        type={direction.selected ? "primary" : "default"}
        block
      >
        {direction.id} - direction
      </Button>
    </li>
  );
};
