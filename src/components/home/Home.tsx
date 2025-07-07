import { getSliderItemsHeroData } from "@/services/get-slider-hero-items";
import SliderHero from "../ui/sliders/SliderHero";
import ProductsSection from "../products/ProductsSection";
import { getMarcaData } from "@/services/get-marcas";

const Home = async () => {
  const sliderItemsHero = await getSliderItemsHeroData();
  const marcas = await getMarcaData();

  return (
    <div>
      <SliderHero items={sliderItemsHero} />
      <ProductsSection marcas={marcas} />
    </div>
  );
};

export default Home;
