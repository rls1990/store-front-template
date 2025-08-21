import { getSliderItemsHeroData } from "@/services/get-slider-hero-items";
import ProductsSection from "../products/ProductsSection";
import { getMarcaData } from "@/services/get-marcas";
import { getCategories } from "@/services/get-categories";
import SliderHero from "../ui/sliders/SliderHero";

const Home = async () => {
  const sliderItemsHero = await getSliderItemsHeroData();
  const marcas = await getMarcaData();
  const categories = await getCategories();

  return (
    <div>
      Homeeeeeeeee
      <SliderHero items={sliderItemsHero} />
      <ProductsSection marcas={marcas} categories={categories} />
    </div>
  );
};

export default Home;
