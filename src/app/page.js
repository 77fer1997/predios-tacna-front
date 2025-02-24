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

export const metadata = {
  title: 'Tama',
  description: 'Tama una experiencia de tacna.',
  keywords: 'tacna, tama, turismo, peru',
  openGraph: {
    title: 'Tama',
    description: 'Tama una experiencia de tacna.',
    type: "article",
    url: 'https://tamatacna.com',
    images: '/assets/tama-logo.png',
  },
  icons: {
    icon: '/assets/tama-logo.png',
    shortcut: '/assets/tama-logo.png',
    apple: '/assets/tama-logo.png',
  }
};
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
