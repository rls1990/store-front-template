import { query } from "./strapi";

export interface ItemSlider {
  id: string;
  title: string;
  subtitle: string;
  route: string;
  image: string;
}

export interface ItemSliderHeroResponse {
  id: string;
  title: string;
  subtitle: string;
  route: string;
  image: Image;
}

export interface Image {
  id: number;
  url: string;
}

export const getSliderItemsHero = async () => {
  return query("slider-hero-items?populate[image][fields]=url").then((res) => {
    const data: ItemSlider[] = res.data.map((item: ItemSliderHeroResponse) => {
      const datares: ItemSlider = {
        id: item.id,
        title: item.title,
        subtitle: item.subtitle,
        route: item.route,
        image: `${process.env.STRAPI_HOST}${item.image.url}`,
      };
      return datares;
    });
    return data;
  });
};
