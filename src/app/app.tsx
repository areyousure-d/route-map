import "./styles/index.css";
import "antd/dist/reset.css";
import { BasicLayout } from "../components/basic-layout";
import { Map } from "../components/map";
import { Menu } from "../components/menu";

export const App = () => {
  return <BasicLayout menu={<Menu />} map={<Map />} />;
};
