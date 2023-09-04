"use client";
import React from "react";
import { Poppins } from "next/font/google";
import Image from "next/image";
import { motion } from "framer-motion";
const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  fallback: "lato",
});
export const BenefitCard = ({ backgroundColor, title, text, image }) => {
  return (
    <div
      className={`${backgroundColor} min-w-[300px] flex flex-col gap-3 rounded-xl px-8 py-8  flex-1`}
    >
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { scale: 0, opacity: 0 },
          visible: { scale: 1, opacity: 1 },
        }}
      >
        <Image
          src={image}
          className=" w-[120px] h-[120px] object-cover rounded-[50%] mb-3"
          width={1200}
          height={720}
          alt=""
        />
      </motion.div>

      <h3
        className={`${poppins.className} text-white mb-3 font-medium lg:text-3xl`}
      >
        {title}
      </h3>
      <p
        className={`${poppins.className} text-white font-light text-[0.9rem] lg:text-lg`}
      >
        {text}
      </p>
    </div>
  );
};
