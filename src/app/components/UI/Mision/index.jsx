"use client";
import React from "react";
import { Poppins } from "next/font/google";
import { motion } from "framer-motion";
import Image from "next/image";
const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  fallback: "roboto",
});

export const Mision = () => {
  return (
    <section className="relative pt-8 pb-8 lg:pt-16 lg:pb-16 bg-[top_4.5rem_center] bg-cuadrilatero bg-cover bg-no-repeat">
      <div className="w-[90%] lg:w-[80%] lg:flex-row m-auto flex flex-col-reverse lg:min-h-[60vh]">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
          transition={{ duration: 0.6 }}
          variants={{
            hidden: { x: -200, opacity: 0 },
            visible: { x: 0, opacity: 1 },
          }}
          className="lg:w-[50%] relative flex justify-center"
        >
          <Image
            className="w-full h-full max-w-[500px]"
            src='/assets/mision-logo.png'
            width={1000}
            height={600}
            alt=""
          />
        </motion.div>
        <div className="lg:w-[50%] lg:px-[5rem] flex flex-col items-center justify-center ">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
            transition={{ duration: 0.6 }}
            variants={{
              hidden: { y: 200, opacity: 0 },
              visible: { y: 0, opacity: 1 },
            }}
            className={`${poppins.className} text-[#001021]  text-left text-2xl sm:text-4xl lg:text-3xl font-medium tracking-tight mb-2`}
          >
            Misión
          </motion.h2>
          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
            transition={{ duration: 0.6 }}
            variants={{
              hidden: { y: 200, opacity: 0 },
              visible: { y: 0, opacity: 1 },
            }}
            className={`${poppins.className} text-[#001021] text-opacity-80 font-light lg:text-xl text-center mb-12`}
          >
            Impulsar la valorización del patrimonio monumental de Tacna mediante la creación de herramientas tecnológicas que conecten a turistas con la riqueza cultural de la ciudad. A través de nuestras plataformas web y móvil, promovemos la economía local mediante el comercio electrónico, fomentando el crecimiento de los vendedores locales y la experiencia integral del turismo.
          </motion.p>
        </div>
      </div>
    </section>
  );
};

{/* <section className="w-[90%] lg:w-[60%] m-auto mt-16 lg:pb-14">
  <motion.h2
    initial="hidden"
    whileInView="visible"
    viewport={{ once: false }}
    transition={{ duration: 0.5 }}
    variants={{
      hidden: { y: 200, opacity: 0 },
      visible: { y: 0, opacity: 1 },
    }}
    className={`${poppins.className} mb-6 text-[#001021] lg:text-4xl text-center font-semibold tracking-normal`}
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
    className={`${poppins.className} text-[#1A1617] text-opacity-80 font-light lg:text-xl text-center mb-10`}
  >
    Impulsar la valorización del patrimonio monumental de Tacna mediante la creación de herramientas tecnológicas que conecten a turistas con la riqueza cultural de la ciudad. A través de nuestras plataformas web y móvil, promovemos la economía local mediante el comercio electrónico, fomentando el crecimiento de los vendedores locales y la experiencia integral del turismo.
  </motion.p>
</section> */}