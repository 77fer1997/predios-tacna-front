"use client";
import React, { useEffect, useRef, useState } from "react";
import { PannellumVideo } from "pannellum-react";

const Picture360 = ({ video }) => {
  const [videoElement, setVideoElement] = useState(null);
  const containerRef = useRef(null);

  useEffect(() => {
    // Esperamos un momento para que el video se renderice
    const findVideo = setTimeout(() => {
      if (containerRef.current) {
        const videoTag = containerRef.current.querySelector("video");
        setVideoElement(videoTag);
      }
    }, 500);

    return () => clearTimeout(findVideo);
  }, []);

  const handlePlay = () => {
    if (videoElement) videoElement.play();
  };

  const handlePause = () => {
    if (videoElement) videoElement.pause();
  };

  const handleForward = () => {
    if (videoElement) videoElement.currentTime += 10; // Avanza 10 segundos
  };

  const handleBackward = () => {
    if (videoElement) videoElement.currentTime -= 10; // Retrocede 10 segundos
  };

  return (
    <div className="App w-full h-[70vh]" ref={containerRef}>
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
        muted={false}
      />
    </div>
  );
};

export default Picture360;
