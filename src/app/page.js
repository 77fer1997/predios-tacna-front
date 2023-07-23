import React from "react";
import "./globals.css";
import Image from "next/image";
import { Montserrat, Open_Sans, Kaushan_Script } from "next/font/google";
import Link from "next/link";
import Portada from "/src/assets/images/tacna.png";
import Catedral from "/src/assets/images/catedral.jpg";
import MapExample from "./components/Map";
import Monumental from "/src/assets/images/zona-monumental.jpg";
const font = Montserrat({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  fallback: "lato",
});
const norican = Kaushan_Script({
  weight: ["400"],
  subsets: ["latin"],
});
const opensans = Open_Sans({
  weight: ["300", "700"],
  subsets: ["latin"],
});
export default function Home() {
  return (
    <>
      <header className="hero">
        <nav>
          <Image
            width={80}
            height={100}
            src="/assets/tacna-flag.png"
            alt="bandera de tacna"
            className="logo"
          />
          <ul>
            <li className="list_item">
              <Link className={`${font.className}`} href="/login">
                Login
              </Link>
            </li>
          </ul>
        </nav>
        <section className={`content`}>
          <h1 className={`${norican.className}`}>¡Bienvenidos a Tacna!</h1>
          <div className="ilustracion_mujeres">
            <Image
              width={985}
              height={485}
              src={Portada}
              alt="bandera de tacna"
            />
          </div>
          <div className="bottom_waves">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1920 260"
              width="1920"
              height="260"
              className="d-block img-fluid w-100"
            >
              <path
                fill="#AE95DA"
                d="M1920,89.5C1810.9,22,1685.3-21.3,1562.4,10.8c-183.2,47.8-303.6,138.8-486.8,186.7
					c-321,84-612-227.4-927.7-124.5C93.6,90.8,43.5,120.8,0,154.2V260h1920V89.5z"
              ></path>
              <path
                fill="#F8F6FC"
                d="M1920,123.2c-106.6-63.9-228.3-103.5-347.2-72.4c-183.2,47.8-303.6,138.8-486.8,186.7
					c-321,84-612-227.4-927.7-124.5C99.5,132.2,45.8,165.7,0,202.3V260h1920V123.2z"
              ></path>
            </svg>
          </div>
        </section>
      </header>
      <section className={`${font.className} description-section `}>
        <div className="description-wrapper">
          <div className="description">
            <h2 className="description__title">
              <span className="red-title">Explora</span> Tacna Un Tesoro en el
              Sur del Perú
            </h2>
            <p className={`${opensans.className} description__text`}>
              Bienvenido a Tacna, una joya escondida en el sur de Perú.
              Sumérgete en su rica historia, encanto cultural y belleza natural.
              Descubre la magia de sus calles adoquinadas, su gastronomía
              exquisita y la calidez de su gente. Desde sitios históricos hasta
              paisajes impresionantes, Tacna te espera con los brazos abiertos
              para una experiencia inolvidable en esta tierra llena de tesoros.
              ¡Ven y vive la magia de Tacna!
            </p>
          </div>
          <Image
            src={Monumental}
            width={200}
            height={200}
            alt="tacna-flag"
            className="description__image"
          />
        </div>
      </section>
      <section
        className={`${font.className} description-section relative bg-dark`}
      >
        <div className="top_waves bg-light">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1920 210"
            className="top_waves_svg"
            fill="currentColor"
          >
            <path d="M1844.3,164.5c-124.4,21.1-258.9,32.6-394.5,34.5c-136.6,1.9-274.1-5.9-403.3-23.2,c-64.8-8.7-127.5-19.8-186.7-33.2c-58.2-13.2-113.1-28.4-167.4-43.8C585,68.2,478,36,353.1,16.9C241.4-0.2,118.2-3.9,0,3.9L0,210,l1920,0v-56.4C1889.8,157.9,1845,164.4,1844.3,164.5z"></path>
          </svg>
        </div>
        <div className="description-wrapper reverse">
          <div className="description">
            <h2 className="description__title c-white">
              Un Paseo por la Plaza de Armas de Tacna
            </h2>
            <p className={`${opensans.className} description__text c-white`}>
              La Plaza de Armas de Tacna es el corazón de la Zona Monumental.
              Rodeada de imponentes edificios históricos, es el lugar perfecto
              para relajarse y disfrutar de la belleza de la arquitectura
              colonial. Contempla la majestuosidad de la Catedral de Tacna y
              admira el monumento al héroe Francisco Bolognesi. Un espacio
              emblemático que te cautivará.
            </p>
          </div>
          <Image
            src={Catedral}
            width={300}
            height={310}
            alt="catedral de tacna"
            className="description__image"
          />
        </div>
      </section>
      <section className={`${font.className} description-section relative`}>
        <div className="top_bot_waves bg-dark">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1920 210"
            className="top_bot_waves_svg"
            fill="currentColor"
          >
            <path d="M1844.3,164.5c-124.4,21.1-258.9,32.6-394.5,34.5c-136.6,1.9-274.1-5.9-403.3-23.2,c-64.8-8.7-127.5-19.8-186.7-33.2c-58.2-13.2-113.1-28.4-167.4-43.8C585,68.2,478,36,353.1,16.9C241.4-0.2,118.2-3.9,0,3.9L0,210,l1920,0v-56.4C1889.8,157.9,1845,164.4,1844.3,164.5z"></path>
          </svg>
        </div>
        <div className="description-wrapper">
          <div className="description">
            <h2 className="description__title">
              <span className="red-title">Sumérgete </span> en la cultura de
              Tacna en la Zona Monumental
            </h2>
            <p className={`${opensans.className} description__text`}>
              La Zona Monumental de Tacna es un verdadero tesoro cultural. Aquí
              podrás disfrutar de eventos culturales, exposiciones de arte y
              festivales tradicionales. Además, podrás degustar la deliciosa
              gastronomía local en los restaurantes típicos. Descubre la
              autenticidad de Tacna en cada rincón de esta zona llena de
              historia y tradición.
            </p>
          </div>
          <Image
            src={Monumental}
            width={300}
            height={300}
            alt="tacna-flag"
            className="description__image"
          />
        </div>
      </section>
      <section className={`${font.className} map-section`}>
        <div className="map-section__wrapper">
          <h2 className={`${font.className} map-section__title`}>
            Ubicanos en los siguientes lugares
          </h2>
          <MapExample />
        </div>
      </section>
    </>
  );
}
