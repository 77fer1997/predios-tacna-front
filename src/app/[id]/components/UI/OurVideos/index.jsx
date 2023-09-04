"use client";
import React from "react";
import { Poppins } from "next/font/google";
import { motion } from "framer-motion";
const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  fallback: "roboto",
});
export const OurVideos = ({ videos }) => {
  return (
    <section className="bg-[#F8F8FF]">
      <div className="lg:w-[80%] m-auto pt-20 pb-12 ">
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
          Nuestros videos
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
          ¡Explora, aprende y diviértete con nuestros emocionantes videos! La
          próxima aventura te espera.
        </motion.p>
        <div className="flex justify-center flex-wrap gap-10">
          {videos.map((video) => {
            const codeVideo = video.url.split("=")[1];
            return (
              <iframe
                key={video.id}
                width="460"
                height="315"
                src={`https://www.youtube.com/embed/${codeVideo}`}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            );
          })}
        </div>
      </div>
    </section>
  );
};
