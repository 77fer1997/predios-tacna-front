"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Poppins, Open_Sans, Outfit } from "next/font/google";

import { motion } from "framer-motion";
import { FaUser } from "react-icons/fa";
import { TbCircleArrowRightFilled } from "react-icons/tb";

const font = Poppins({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  fallback: "lato",
});
const opensans = Open_Sans({
  weight: ["300", "400", "700"],
  subsets: ["latin"],
  fallback: "lato",
});
const outfit = Outfit({
  weight: ["300", "400", "700"],
  subsets: ["latin"],
  fallback: "lato",
});
export const Hero = () => {
  return (
    <header className="hero">
      <video className="back-video" loop autoPlay muted>
        <source
          src="https://res.cloudinary.com/dxgh1api3/video/upload/v1692890760/video/zfze66mhoo2jkcnetkat.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
      <nav className="nav">
        <div className="flex items-center">
          <Link href="/">
            <Image
              width={80}
              height={100}
              src="/assets/tama-logo.png"
              alt="bandera de tacna"
              className="logo"
            />
          </Link>

          <ul>
            <li className="list_item">
              <Link
                className={`${font.className} hover:underline bg-[#00c6f7] block px-2 py-1 md:flex md:gap-2 md:px-6 md:py-4 no-underline rounded-full text-white hover:opacity-90`}
                href="/login"
              >
                <FaUser className={`mr-0 hidden md:mr-1 md:block md:text-[18px] text-[10px]`} color="white" />
                <p className="text-[12px] md:text-[16px] md:inline-block">Iniciar Sesión</p>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      <section className={`content`}>
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className={`${outfit.className} text-center text-white text-4xl lg:text-8xl`}
        >
          ¡Bienvenidos a <Image src='/assets/tama-logo.png' className="w-20 h-8 md:w-28 md:h-8 lg:w-56 lg:h-16" alt="logo de tama" width={384} height={145} /> !
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className={`${opensans.className} text-center text-white lg:text-3xl text-md leading-7 mb-3`}
        >
          Visita los lugares mas emblemáticos de la ciudad de Tacna, conoce su
          historia y disfruta de sus vistas.
        </motion.p>
        <motion.a
          whileHover={{
            scale: 1.2,
            transition: { duration: 0.5 },
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          href="#map"
          className="bg-[#00c6f7] px-8 py-4 no-underline text-xl rounded-full text-white hover:opacity-90"
        >
          Ver mapa
          <TbCircleArrowRightFilled className="align-middle ml-2 text-2xl" />
        </motion.a>
      </section>
    </header>
  );
};
