import "./globals.css";
import { getPrediosWithImagesService } from "./services/predios.service";

import {
  Description,
  Map,
  Benefits,
  Hero,
  Whoarewe,
  Mision,
  Vision,
} from "./components/UI";

export default async function Home() {
  const predios = await getPrediosWithImagesService();
  return (
    <>
      <Hero />
      <Whoarewe />
      <Mision />
      <Vision />
      <Benefits />
      <Description />
      <Map predios={predios} />
    </>
  );
}
