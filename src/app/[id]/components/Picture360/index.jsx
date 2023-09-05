"use client";
import React from "react";
import { Pannellum, PannellumVideo } from "pannellum-react";

const Picture360 = ({ video }) => {
  console.log(video);
  return (
    <div className="App w-full h-[70vh]">
      {/*  <Pannellum
        width="100%"
        height="500px"
        image="https://t3.ftcdn.net/jpg/01/81/61/50/360_F_181615003_j5vvF46SlLp3kflyknHqh0RP7nNBw5oW.jpg"
        pitch={10}
        yaw={180}
        hfov={110}
        autoLoad
        showZoomCtrl={false}
        onLoad={() => {
          console.log("panorama loaded");
        }}
      ></Pannellum> */}
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
