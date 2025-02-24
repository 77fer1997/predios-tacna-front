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
import { TamaSection } from "./components/UI/TamaSection";
import { Footer } from "./components/layout/Footer";

export const dynamic = "force-dynamic";

export default async function Home() {
  const predios = await getPrediosWithImagesService();
  return (
    <>
      <Hero />
      <Whoarewe />
      <Mision />
      <Vision />
      <TamaSection />
      <Benefits />
      <Description />
      <Map predios={predios} />
      <Footer />
    </>
  );
}
