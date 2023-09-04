import React from "react";
import ShopCard from "../../Card";

export const Products = ({ productos }) => {
  return (
    <section className="bg-[url('https://mosquerarosado.com/wp-content/themes/mosquerarosado2023/images/bg_trapecio.svg')]">
      <div className="wrapper pt-20 pb-12 ">
        <h3
          className={`${poppins.className} text-[#1A1617] lg:text-[1.95rem] lg:font-semibold text-4xl font-medium text-center mb-5`}
        >
          Tienda
        </h3>
        <p
          className={`${poppins.className} text-center opacity-70 lg:text-[18px] text-[1.25rem]  mb-8`}
        >
          Sumérgete en una experiencia única: ¡nuestro video en 360 grados te
          llevará a lugares asombrosos como nunca antes! No te lo pierdas.
        </p>
        <div className="flex flex-wrap">
          {productos.map((producto) => {
            return <ShopCard key={producto.id} product={producto} />;
          })}
        </div>
      </div>
    </section>
  );
};
