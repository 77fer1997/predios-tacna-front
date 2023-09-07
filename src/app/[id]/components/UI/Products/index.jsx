"use client";
import React from "react";
import ShopCard from "../../Card";
import { Poppins } from "next/font/google";
import { motion } from "framer-motion";

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  fallback: "roboto",
});
export const Products = ({ productos }) => {
  return (
    <section className="w-[90%] lg:w-[80%] m-auto ">
      <div className="wrapper pt-20 pb-12 ">
        <motion.h3
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { y: 200, opacity: 0 },
            visible: { y: 0, opacity: 1 },
          }}
          className={`${poppins.className} text-center text-2xl lg:text-4xl font-semibold mb-2`}
        >
          Tienda
        </motion.h3>
        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { y: 200, opacity: 0 },
            visible: { y: 0, opacity: 1 },
          }}
          className={`${poppins.className} text-[#1A1617] font-light lg:text-2xl text-center mb-12`}
        >
          Sumérgete en una experiencia única: ¡nuestro video en 360 grados te
          llevará a lugares asombrosos como nunca antes! No te lo pierdas.
        </motion.p>
        <div className="flex flex-wrap gap-8">
          {productos.map((producto) => {
            return <ShopCard key={producto.id} product={producto} />;
          })}
        </div>
      </div>
    </section>
  );
};
