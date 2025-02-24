import React from 'react'
import { Poppins } from "next/font/google";

const poppins = Poppins({
    weight: ["400", "500", "700"],
    subsets: ["latin"],
    fallback: "lato",
});

export const Footer = () => {
    return (
        <div className='bg-[#00c6f7] h-16 flex items-center justify-center md:h-20'>
            <p className={`${poppins.className} text-[12px] text-white md:text-[16px]`}>Tama © Todos los derechos reservados 2025</p>
        </div>
    )
}
