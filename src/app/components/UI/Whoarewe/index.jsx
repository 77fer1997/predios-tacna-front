"use client";
import Image from "next/image";
import React from "react";
import friends from "../../../../../public/friends1.png";
import { Poppins } from "next/font/google";
import { motion } from "framer-motion";
const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  fallback: "roboto",
});
export const Whoarewe = () => {
  return (
    <>
      <section className="relative pt-8 pb-8 lg:pt-16 lg:pb-16 bg-[bottom_center] bg-cuadrilatero bg-cover bg-no-repeat">
        <div className="w-[90%] lg:w-[80%] m-auto lg:flex lg:min-h-[60vh]">
          <div className="lg:w-[50%] lg:px-[3.5rem] flex flex-col justify-center ">
            <motion.h3
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false }}
              transition={{ duration: 0.6 }}
              variants={{
                hidden: { y: 200, opacity: 0 },
                visible: { y: 0, opacity: 1 },
              }}
              className={`${poppins.className}   text-left text-2xl sm:text-4xl lg:text-6xl lg:font-bold font-medium mb-2`}
            >
              <span className=" text-transparent bg-clip-text bg-gradient-to-r from-[#264653] to-[#fb8500]">
                ¿Quienes <br /> Somos?
              </span>
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
              className={`${poppins.className} text-[#1A1617] font-light lg:text-2xl text-left mb-12`}
            >
              Somos un equipo multidisciplinario de estudiantes especializados
              en diseñar mejores experiencias, a través de la tecnología y la
              innovación queremos promover el turismo en nuestra ciudad.
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
            className="lg:w-[50%] relative"
          >
            <Image
              className=" w-full h-full object-cover rounded-3xl "
              src={friends}
              width={1000}
              height={1000}
              alt=""
            />
          </motion.div>
        </div>
      </section>
    </>
  );
};
