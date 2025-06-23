import { getSliderItemsHeroData } from "@/services/get-slider-hero-items";
import SliderHero from "../ui/sliders/SliderHero";
import Container from "../ui/container/Container";
import ProductsSection from "../products/ProductsSection";

const Home = async () => {
  const sliderItemsHero = await getSliderItemsHeroData();

  return (
    <div>
      <SliderHero items={sliderItemsHero} />
      <Container>
        <ProductsSection />
      </Container>
    </div>
  );
};

export default Home;
