import { getSliderItemsHeroData } from "@/services/get-slider-hero-items";
import SliderHero from "../ui/sliders/SliderHero";
import Container from "../ui/container/Container";
import ProductsSection from "../products/ProductsSection";
import { getMarcaData } from "@/services/get-marcas";

const Home = async () => {
  const sliderItemsHero = await getSliderItemsHeroData();
  const marcas = await getMarcaData();

  return (
    <div>
      <SliderHero items={sliderItemsHero} />
      <Container>
        <ProductsSection marcas={marcas} />
      </Container>
    </div>
  );
};

export default Home;
