import type { NextPage } from "next";
import dynamic from "next/dynamic";
import Head from "next/head";
import Image from "next/image";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import styles from "../styles/Home.module.css";
const MapWithNoSSR = dynamic(() => import("../MapTest"), {
  ssr: false,
});
const Home: NextPage = () => {
  return (
    <div style={{ height: "100vh" }}>
      <MapWithNoSSR />;
    </div>
  );
};

export default Home;
