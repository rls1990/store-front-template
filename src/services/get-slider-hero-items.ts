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

export const getSliderItemsHeroData = async () => {
  const data: ItemSlider[] = [
    {
      id: "sih1",
      title: "¡Llegó la Primavera!",
      subtitle: "30% OFF en ropa y accesorios. Solo por tiempo limitado",
      image: "/images/vestidos-verano.png",
      route: "#",
    },
    {
      id: "sih2",
      title: "Nuevo Smartphone Pro-X",
      subtitle: "Tecnología de vanguardia con cámara 4K. ¡Reserva el tuyo hoy!",
      image: "/images/phone.png",
      route: "#",
    },
    {
      id: "sih3",
      title: "2×1 en Hogar",
      subtitle:
        "Lleva dos productos por el precio de uno. Solo hasta agotar stock",
      image: "/images/productos-hogar.png",
      route: "#",
    },
  ];

  return data;
};
