"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaUser } from "react-icons/fa";
import Carrousel from "../../Carrousel";
import { Poppins } from "next/font/google";
import { motion } from "framer-motion";
const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  fallback: "roboto",
});
export const Gallery = ({ predio }) => {
  return (
    <>
      <nav className="h-[80px] bg-slate-50 shadow-lg sticky top-0 z-50 ">
        <div className="h-full w-[90%] lg:w-[80%] mx-auto flex justify-between items-center">
          <Link href="/">
            <Image
              width={80}
              height={100}
              src="/assets/tacna-flag.png"
              alt="bandera de tacna"
              className="w-[40px] h-auto"
            />
          </Link>

          <ul>
            <li className="list-none">
              <Link
                className={`${poppins.className} hover:underline bg-[#EA6A1F] px-6 py-4 no-underline rounded-full text-white hover:opacity-90`}
                href="/login"
              >
                <FaUser className={`mr-1 text-base`} />
                <p className="text-md inline-block">Iniciar Sesión</p>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      <section
        id="inicio"
        className="h-[calc(100vh-80px)] bg-predio bg-no-repeat bg-cover py-6"
      >
        <div className="w-[90%] h-full lg:w-[80%] m-auto lg:flex">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
            transition={{ duration: 0.6 }}
            variants={{
              hidden: { y: 200, opacity: 0 },
              visible: { y: 0, opacity: 1 },
            }}
            className="lg:w-[50%] mb-6 flex flex-col items-center justify-center lg:px-24"
          >
            <h3
              className={`${poppins.className} text-[#1A1617] lg:font-semibold lg:text-4xl font-medium text-center mb-5`}
            >
              {predio.name}
            </h3>
            <p
              className={`${poppins.className} text-center opacity-70 lg:text-2xl`}
            >
              {predio.description}
            </p>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
            transition={{ duration: 0.6 }}
            variants={{
              hidden: { x: 200, opacity: 0 },
              visible: { x: 0, opacity: 1 },
            }}
            className="lg:w-[50%] flex items-center"
          >
            <Carrousel images={predio.images} />
          </motion.div>
        </div>
      </section>
    </>
  );
};
