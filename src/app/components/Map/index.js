"use client";
import React from "react";
import Map, { Marker } from "react-map-gl";
import Mujeres from "/src/assets/images/ilustracion_mujeres.png";
import Image from "next/image";
const MapExample = () => {
  return (
    <Map
      mapLib={import("mapbox-gl")}
      mapboxAccessToken="pk.eyJ1IjoiNzdmZXIxOTk3IiwiYSI6ImNsMXV0c2p0cjJ1NjQzZG1tYzA2amdtY2gifQ.3-_eT5VA2vJWDo5lAV6Z4w"
      initialViewState={{
        latitude: -17.99903,
        longitude: -70.236869,
        zoom: 15,
      }}
      style={{ width: 600, height: 600, overflow: "hidden" }}
      mapStyle="mapbox://styles/77fer1997/cl1v0ygt9002115qnvp592jib"
      controller={true}
    >
      <Marker longitude={-70.236869} latitude={17.99903}>
        <div style={{ color: "white" }}>You are here</div>
      </Marker>
      <Marker longitude={-70.236869} latitude={17.99903}>
        <div style={{ color: "white" }}>You are here</div>
      </Marker>
    </Map>
  );
};

export default MapExample;
