import { useDispatch } from "react-redux";
import { Direction, directionsActions } from "@/store/directions";

interface Props {
  direction: Direction;
}

export const DirectionItem = ({ direction }: Props) => {
  const dispatch = useDispatch();

  const onClick = () => {
    dispatch(directionsActions.selectDirection(direction));
  };

  return (
    <li>
      {direction.selected && "selected"}
      <button onClick={onClick}>{direction.id}</button>
    </li>
  );
};
