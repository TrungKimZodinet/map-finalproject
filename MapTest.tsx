import React from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";

type Props = {};

function MapTest({}: Props) {
  return (
    <MapContainer
      center={[40.8054, -74.0241]}
      zoom={18}
      maxZoom={18}
      scrollWheelZoom={false}
      style={{ height: "100vh" }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={[40.8054, -74.0241]} draggable={true}>
        <Popup>Hey ! I live here</Popup>
      </Marker>
    </MapContainer>
  );
}

export default MapTest;
