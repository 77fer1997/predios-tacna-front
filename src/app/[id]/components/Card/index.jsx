import React from "react";
import { Poppins } from "next/font/google";
import Image from "next/image";
const poppins = Poppins({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  fallback: "lato",
});
const ShopCard = ({ product }) => {
  return (
    <div className="w-[410px] max-w-[300px] shadow-[0_5px_15px_0_rgba(0,0,0,0.2)] flex-1 rounded-lg transition-all hover:scale-110">
      <div className=" ">
        <Image
          className="w-full h-auto"
          src={product.imagen}
          alt={product.name}
          width={1920}
          height={1080}
        />
        <div className="p-3 flex flex-col gap-1">
          <h3
            className={`${poppins.className} text-[#1A1617] text-lg font-medium`}
          >
            {product.name}
          </h3>
          <h4
            className={`${poppins.className} text-[#1A1617] text-md font-normal`}
          >
            {product.description}
          </h4>
          <p className={`${poppins.className} text-[#1A1617] text-sm`}>
            S/.{product.price}.00
          </p>
        </div>
      </div>
    </div>
  );
};

export default ShopCard;
