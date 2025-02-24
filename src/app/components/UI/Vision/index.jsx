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

export const Vision = () => {
  return (
    <section className="relative pt-8 pb-8 lg:pt-16 lg:pb-16 bg-[bottom_center] bg-cuadrilatero bg-cover bg-no-repeat">
      <div className="w-[90%] lg:w-[80%] m-auto lg:flex lg:min-h-[60vh]">
        <div className="lg:w-[50%] lg:px-[5rem] flex flex-col items-center justify-center ">
          <motion.h3
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
            transition={{ duration: 0.6 }}
            variants={{
              hidden: { y: 200, opacity: 0 },
              visible: { y: 0, opacity: 1 },
            }}
            className={`${poppins.className} text-center text-2xl sm:text-4xl lg:text-3xl font-medium tracking-tight mb-2`}
          >
            Visión
          </motion.h3>
          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
            transition={{ duration: 0.7 }}
            variants={{
              hidden: { y: 200, opacity: 0 },
              visible: { y: 0, opacity: 1 },
            }}
            className={`${poppins.className} text-[#1A1617] font-light lg:text-xl text-center mb-12`}
          >
            Ser una referencia innovadora en la promoción del patrimonio cultural de Tacna, integrando la tecnología y el comercio local para posicionar la ciudad como un destino turístico destacado a nivel nacional e internacional, fortaleciendo el desarrollo cultural, económico y sostenible de la región.
          </motion.p>
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
          transition={{ duration: 1 }}
          variants={{
            hidden: { x: 200, opacity: 0 },
            visible: { x: 0, opacity: 1 },
          }}
          className="lg:w-[50%] relative  flex justify-center"
        >
          <Image
            className="w-full h-full max-w-[500px]"
            src='/assets/vision-logo.png'
            width={400}
            height={300}
            alt=""
          />
        </motion.div>
      </div>
    </section>
  );
};
