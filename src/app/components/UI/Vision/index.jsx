"use client";
import React from "react";
import { Poppins } from "next/font/google";
import { motion } from "framer-motion";
const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  fallback: "roboto",
});

export const Vision = () => {
  return (
    <section className="  mt-16  bg-[#f8f8ff]">
      <div className="w-[90%] lg:w-[60%] m-auto py-6 lg:py-14">
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { y: 200, opacity: 0 },
            visible: { y: 0, opacity: 1 },
          }}
          className={`${poppins.className} mb-6 text-[#1A1617] lg:text-4xl text-center font-semibold tracking-normal`}
        >
          Nuestra Visión
        </motion.h2>
        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { y: 200, opacity: 0 },
            visible: { y: 0, opacity: 1 },
          }}
          className={`${poppins.className} text-[#1A1617] font-light lg:text-xl text-center mb-10`}
        >
          Nuestra visión es convertir a Tacna en un destino turístico de
          renombre internacional, reconocido por su autenticidad, hospitalidad y
          diversidad de atracciones.
          <br />
          <br />
          Buscamos fomentar la preservación del patrimonio cultural y natural de
          la región, garantizando que las generaciones futuras puedan disfrutar
          de su belleza y singularidad.
        </motion.p>
      </div>
    </section>
  );
};
