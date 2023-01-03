import "./styles/index.css";
import "antd/dist/reset.css";
import { BasicLayout } from "../components/basic-layout";
import { Directions } from "../components/directions";
import { Map } from "../components/map";
import { ReduxProvider } from "./providers";

export const App = () => {
  return (
    <ReduxProvider>
      <BasicLayout directions={<Directions />} map={<Map />} />
    </ReduxProvider>
  );
};
