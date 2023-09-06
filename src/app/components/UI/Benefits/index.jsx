"use client";
import React from "react";
import { Poppins } from "next/font/google";
import { BenefitCard } from "../../BenefitCard";
import Image from "next/image";
import map from "/src/assets/images/mapa.png";
import grades360 from "/src/assets/images/360.jpeg";
import recuerdos from "/src/assets/images/recuerdos.jpeg";
import { easeIn, motion } from "framer-motion";
const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  fallback: "roboto",
});
const benefits = [
  {
    id: 1,
    backgroundColor: "bg-[#2a9d8f]",
    title: "Ver mapa",
    text: "Te proporcionamos un mapa donde podrás visualizar los lugares mas importantes de Tacna.",
    image: map,
  },
  {
    id: 2,
    backgroundColor: "bg-[#264653]",
    title: "Productos",
    text: "Tenemos un catalogo de productos para cada lugar al que quieras ir, revisalo y no dejes pasar la oportunidad de comprar unos lindos recuerdos de tu viaje.",
    image: recuerdos,
  },
  {
    id: 3,
    backgroundColor: "bg-[#f4a261]",
    title: "360 grados",
    text: "Te proporcionamos un vista de 360 grados de los lugares a los que quieras ir, también una galeria con hermosas fotos para que te animes a visitarlas.",
    image: grades360,
  },
];
export const Benefits = () => {
  return (
    <section className="w-[90%] lg:w-[80%] m-auto mt-16 lg:pb-14">
      <motion.h2
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { y: 200, opacity: 0 },
          visible: { y: 0, opacity: 1 },
        }}
        className={`${poppins.className} mb-2 text-[#1A1617] lg:text-4xl text-center font-semibold tracking-normal`}
      >
        ¿Qué podemos hacer por tí?
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
        className={`${poppins.className} text-[#1A1617] font-light lg:text-2xl text-center mb-10`}
      >
        Conoce los servicios que te ofrecemos.
      </motion.p>
      <div className="flex flex-wrap gap-6 justify-around">
        {benefits.map((benefit) => (
          <BenefitCard
            key={benefit.id}
            backgroundColor={benefit.backgroundColor}
            title={benefit.title}
            text={benefit.text}
            image={benefit.image}
          />
        ))}
      </div>
    </section>
  );
};
