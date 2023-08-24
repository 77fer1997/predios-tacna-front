import React from "react";
import "./globals.css";
import Image from "next/image";
import { Montserrat, Open_Sans, Poppins } from "next/font/google";
import Link from "next/link";
import Catedral from "/src/assets/images/catedral.jpg";
import MapExample from "./components/Map";
import Monumental from "/src/assets/images/zona-monumental.jpg";
import { FaUser } from "react-icons/fa";
import { TbCircleArrowRightFilled } from "react-icons/tb";
import { getPrediosWithImagesService } from "./services/predios.service";
import video from "../assets/tacna.mp4";
const font = Poppins({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  fallback: "lato",
});
const montserrat = Montserrat({
  weight: ["400", "700"],
  subsets: ["latin"],
  fallback: "lato",
});
const opensans = Open_Sans({
  weight: ["300", "400", "700"],
  subsets: ["latin"],
  fallback: "lato",
});
async function fetchPredios() {
  return await getPrediosWithImagesService();
}
export default async function Home() {
  const predios = await fetchPredios();

  return (
    <>
      <header className="hero">
        {/* <video
          className="back-video"
          src={require("../assets/videos/tacna.mp4")}
          autoPlay
          loop
          muted
        /> */}
        <video className="back-video" loop autoPlay muted>
          <source
            src="https://res.cloudinary.com/dxgh1api3/video/upload/v1692890760/video/zfze66mhoo2jkcnetkat.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
        <nav>
          <div>
            <Image
              width={80}
              height={100}
              src="/assets/tacna-flag.png"
              alt="bandera de tacna"
              className="logo"
            />
            <ul>
              <li className="list_item">
                <Link
                  className={`${font.className} text-xl hover:underline`}
                  href="/login"
                >
                  <FaUser className="mr-1 text-base" color="white" />
                  Login
                </Link>
              </li>
            </ul>
          </div>
        </nav>
        <section className={`content`}>
          <h1
            initial={{ x: "-200" }}
            animate={{ x: 0 }}
            className={`${montserrat.className} text-center`}
          >
            ¡Bienvenidos a Tacna!
          </h1>
          <p
            className={`${opensans.className} text-center text-white text-[1.25rem] sm:text-[1.50rem] opacity-80 leading-7 mb-3`}
          >
            Conoce la magia de Tacna y déjate envolver por la riqueza de su
            historia, la belleza de sus paisajes y la calidez de su gente.
          </p>
          <a
            href="#map"
            className="bg-[#773dbd] px-8 py-4 no-underline text-xl rounded-xl text-white hover:opacity-90"
          >
            Explorar
            <TbCircleArrowRightFilled className="align-middle ml-2 text-2xl" />
          </a>
        </section>
      </header>
      <section className={` description-section `}>
        <div className="description-wrapper">
          <div className="description">
            <h2
              className={`${font.className} text-2xl sm:text-3xl lg:text-4xl font-medium tracking-tight mb-5`}
            >
              <span className="red-title">Explora</span> Tacna Un Tesoro en el
              Sur del Perú
            </h2>
            <p
              className={`${opensans.className} text-base sm:text-xl opacity-70 `}
            >
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
            width={1920}
            height={1080}
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
            <h2
              className={`${font.className} text-2xl sm:text-3xl lg:text-4xl font-medium tracking-tight mb-5 text-white`}
            >
              Un Paseo por la Plaza de Armas de Tacna
            </h2>
            <p
              className={`${opensans.className} text-base sm:text-xl opacity-70  text-white`}
            >
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
            width={1920}
            height={1080}
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
            <h2
              className={`${font.className} text-2xl sm:text-3xl lg:text-4xl font-medium tracking-tight mb-5`}
            >
              <span className="red-title">Sumérgete </span> en la cultura de
              Tacna en la Zona Monumental
            </h2>
            <p
              className={`${opensans.className} text-base sm:text-xl opacity-70 `}
            >
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
            width={1920}
            height={1080}
            alt="tacna-flag"
            className="description__image"
          />
        </div>
      </section>
      <section id="map" className={`${font.className} bg-[#f8f8ff]`}>
        <div className=" m-auto pt-20 w-[90%] sm:w-[80%] lg:w-[70%]">
          <h2
            className={`${font.className} text-center text-2xl sm:text-3xl lg:text-4xl font-medium tracking-tight mb-10`}
          >
            ¡Ven y explora las rutas que te llevarán a lugares asombrosos y
            experiencias inolvidables!
          </h2>
          <MapExample places={predios} />
        </div>
      </section>
    </>
  );
}
