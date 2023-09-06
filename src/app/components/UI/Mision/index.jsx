"use client";
import React from "react";
import { Poppins } from "next/font/google";
import { motion } from "framer-motion";
const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  fallback: "roboto",
});

export const Mision = () => {
  return (
    <section className="w-[90%] lg:w-[60%] m-auto mt-16 lg:pb-14">
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
        Nuestra Misión
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
        Nuestra misión es promover y enriquecer la experiencia turística en la
        hermosa región de Tacna. Nos esforzamos por brindar a nuestros
        visitantes experiencias inolvidables que resalten la rica historia, la
        cultura vibrante y la belleza natural de la región.
        <br />
        <br />
        Trabajamos en estrecha colaboración con las comunidades locales para
        impulsar el desarrollo sostenible del turismo, generando beneficios
        económicos y culturales para todos.
      </motion.p>
    </section>
  );
};
