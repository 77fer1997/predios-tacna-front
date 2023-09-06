"use client";
import React from "react";
import MapExample from "../../Map";
import { Poppins } from "next/font/google";
import { motion } from "framer-motion";

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  fallback: "roboto",
});
export const Map = ({ predios }) => {
  return (
    <section id="map" className={`${poppins.className} `}>
      <div className=" m-auto pt-20 w-[90%] sm:w-[80%] lg:w-[70%]">
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
          transition={{ duration: 0.6 }}
          variants={{
            hidden: { y: 200, opacity: 0 },
            visible: { y: 0, opacity: 1 },
          }}
          className={`${poppins.className}  text-center text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight mb-2`}
        >
          Ubícanos
        </motion.h2>
        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
          transition={{ duration: 0.7 }}
          variants={{
            hidden: { y: 200, opacity: 0 },
            visible: { y: 0, opacity: 1 },
          }}
          className={`${poppins.className} text-[#1A1617] font-light lg:text-2xl text-center mb-12`}
        >
          Conoce los servicios que te ofrecemos.
        </motion.p>
        <MapExample places={predios} />
      </div>
    </section>
  );
};
