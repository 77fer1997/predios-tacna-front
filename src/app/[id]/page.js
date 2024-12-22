// Import Swiper styles

import { getPredioWithImagesService } from "./services/prediowithimages.service";
import { getPredioVideosService } from "./services/predioVideos.service";
import { getProductsByPredio } from "./services/products.service";

import { Gallery } from "./components/UI/Gallery";
import { OurVideos } from "./components/UI/OurVideos";
import { Video360 } from "./components/UI/Video360";
import { Products } from "./components/UI/Products";

const PredioLanding = async ({ params: { id } }) => {
  const predio = await getPredioWithImagesService(id);
  const videos = await getPredioVideosService(id);
  const productos = await getProductsByPredio(id);

  return (
    <>
      <Gallery predio={predio} />
      <OurVideos videos={videos} />
      <Video360 video={predio.url360} />
      {productos?.length > 0 && <Products productos={productos} />}
    </>
  );
};
export default PredioLanding;
