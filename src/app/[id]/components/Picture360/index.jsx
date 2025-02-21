"use client";
import React from "react";
import { PannellumVideo } from "pannellum-react";

const Picture360 = ({ video }) => {
  return (
    <div className="App w-full h-[70vh]">
      <PannellumVideo
        video={video}
        loop
        width="100%"
        height="100%"
        pitch={5}
        yaw={180}
        hfov={140}
        minHfov={50}
        maxHfov={120}
      ></PannellumVideo>
    </div>
  );
};

export default Picture360;
