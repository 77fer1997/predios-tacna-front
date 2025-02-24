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

export const TamaSection = () => {
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
                        src='/assets/tama.png'
                        width={500}
                        height={500}
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
                        ¡Conoce a Tamy!
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
                        ¡Tamy es la carismática y aventurera llama que representa el espíritu de Tama, una empresa orgullosa de promover la riqueza histórica y cultural de la zona monumental de Tacna, Perú.
                        <br></br>
                        <br></br>
                        Con su poncho andino lleno de colores tradicionales y su energía contagiosa, Tamy es más que una mascota: es una guía que te invita a explorar, descubrir y conectar con los lugares más emblemáticos de Tacna. Siempre acompañada de su smartphone, pc y tablet, Tamy simboliza la unión perfecta entre tradición y tecnología, ayudándote a navegar de manera interactiva por esta maravillosa región.
                    </motion.p>
                </div>
            </div>
        </section>
    );
};