"use client";
import Image from "next/image";
import React from "react";
import catedral from "../../../../assets/images/catedral.jpg";
import plaza from "../../../../assets/images/plaza_de_armas.jpg";
import { Poppins } from "next/font/google";
import { motion } from "framer-motion";
const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  fallback: "roboto",
});
export const Description = () => {
  return (
    <>
      <section className="relative pt-8 pb-8 lg:pt-16 lg:pb-16 bg-[bottom_center] bg-cuadrilatero bg-cover bg-no-repeat">
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
          Lugares mas visitados
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
          Un vistazo a los lugares mas visitados de nuestra ciudad.
        </motion.p>
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
              La Plaza de Armas
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
              La Plaza de Armas de Tacna es el escenario de numerosos eventos
              culturales y festividades a lo largo del año. Las festividades
              patrias peruanas, como el Día de la Independencia el 28 de julio y
              el Día de Tacna el 28 de agosto, se celebran con desfiles y
              ceremonias en la plaza.
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
              className=" w-full h-full object-cover rounded-3xl shadow-2xl"
              src={plaza}
              width={1000}
              height={600}
              alt=""
            />
          </motion.div>
        </div>
      </section>
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
            className="lg:w-[50%] relative"
          >
            <Image
              className=" w-full h-full object-cover rounded-3xl shadow-2xl"
              src={catedral}
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
              className={`${poppins.className} text-left text-2xl sm:text-4xl lg:text-3xl font-medium tracking-tight mb-2`}
            >
              La Catedral
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
              className={`${poppins.className} text-[#1A1617] font-light lg:text-xl text-center mb-12`}
            >
              La Catedral es el principal lugar de culto católico en Tacna y
              alberga una importante colección de arte religioso, incluyendo
              pinturas, esculturas y ornamentos sagrados. Los fieles y
              visitantes pueden asistir a misas y ceremonias religiosas en este
              hermoso templo.
            </motion.p>
          </div>
        </div>
      </section>
    </>
  );
};
