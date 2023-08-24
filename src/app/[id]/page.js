// Import Swiper styles
import "swiper/css";
import Carrousel from "./components/Carrousel";
import "./style.css";
import { Poppins } from "next/font/google";
import dynamic from "next/dynamic";
import { getPredioWithImagesService } from "./services/prediowithimages.service";
import { getPredioVideosService } from "./services/predioVideos.service";
import { getProductsByPredio } from "./services/products.service";
import ShopCard from "./components/Card";
const poppins = Poppins({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  fallback: "lato",
});

const PredioLanding = async ({ params: { id } }) => {
  const predio = await getPredioWithImagesService(id);
  const videos = await getPredioVideosService(id);
  const productos = await getProductsByPredio(id);

  const VR = dynamic(() => import("./components/Picture360"), { ssr: false });
  return (
    <>
      <section className="section bg-trapecio bg-trapecio-2">
        <div className="wrapper">
          <h1
            className={`${poppins.className} text-[#1A1617] lg:text-[1.95rem] lg:font-semibold text-4xl font-medium text-center mb-5`}
          >
            <span>{predio.name}</span>
          </h1>
          <Carrousel images={predio.images} />
        </div>
      </section>
      <div className="wrapper pb-20">
        <h3
          className={`${poppins.className} text-[#1A1617] lg:text-[1.95rem] lg:font-semibold text-4xl font-medium text-center mb-5`}
        >
          {predio.name}
        </h3>
        <p
          className={`${poppins.className} text-center opacity-70 lg:text-[18px] text-[1.25rem]`}
        >
          {predio.description}
        </p>
      </div>
      <section className="bg-[#F8F8FF]">
        <div className="wrapper pt-20 pb-12 ">
          <h3
            className={`${poppins.className} text-[#1A1617] lg:text-[1.95rem] lg:font-semibold text-4xl font-medium text-center mb-5`}
          >
            Sumérgete en Inspiración: ¡Disfruta Nuestros Videos!
          </h3>
          <p
            className={`${poppins.className} text-center opacity-70 lg:text-[18px] text-[1.25rem]  mb-5`}
          >
            ¡Explora, aprende y diviértete con nuestros emocionantes videos! La
            próxima aventura te espera.
          </p>
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
      <section className="wrapper pt-20 pb-12 ">
        <h3
          className={`${poppins.className} text-[#1A1617] lg:text-[1.95rem] lg:font-semibold text-4xl font-medium text-center mb-5`}
        >
          Explora el Mundo en 360°: Una Aventura Visual Sin Igual
        </h3>
        <p
          className={`${poppins.className} text-center opacity-70 lg:text-[18px] text-[1.25rem]  mb-8`}
        >
          Sumérgete en una experiencia única: ¡nuestro video en 360 grados te
          llevará a lugares asombrosos como nunca antes! No te lo pierdas.
        </p>
        <VR video={predio.url360} />
      </section>
      {productos.length > 0 && (
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
              Sumérgete en una experiencia única: ¡nuestro video en 360 grados
              te llevará a lugares asombrosos como nunca antes! No te lo
              pierdas.
            </p>
            <div className="flex flex-wrap">
              {productos.map((producto) => {
                return <ShopCard key={producto.id} product={producto} />;
              })}
            </div>
          </div>
        </section>
      )}
    </>
  );
};
export default PredioLanding;
