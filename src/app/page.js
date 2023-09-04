import React from "react";
import "./globals.css";
import MapExample from "./components/Map";
import { getPrediosWithImagesService } from "./services/predios.service";

import { Description, Map, Benefits, Hero } from "./components/UI";

async function fetchPredios() {
  return await getPrediosWithImagesService();
}
export default async function Home() {
  const predios = await fetchPredios();
  return (
    <>
      <Hero />
      <Description />
      <Benefits />
      <Map predios={predios} />
    </>
  );
}
