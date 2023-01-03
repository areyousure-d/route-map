import {
  MapContainer,
  Marker,
  Polyline,
  Popup,
  TileLayer,
} from "react-leaflet";
import { useSelector } from "react-redux";
import { mapSelectors } from "@/store/map";
import { ZoomToViewBounds } from "../zoom-to-view-bounds";

export const Map = () => {
  const { from, to } = useSelector(mapSelectors.fromToPoints);
  const route = useSelector(mapSelectors.route);

  return (
    <MapContainer center={[59.84660399, 30.29496392]} zoom={13}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      <Marker position={from}>
        <Popup>From position</Popup>
      </Marker>

      <Marker position={to}>
        <Popup>To position</Popup>
      </Marker>

      <Polyline pathOptions={{ color: "blue" }} positions={route} />

      <ZoomToViewBounds bounds={[from, to]} />
    </MapContainer>
  );
};
