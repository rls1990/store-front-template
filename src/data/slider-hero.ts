export interface ItemSlider {
  id: string;
  title: string;
  subtitle: string;
  route: string;
  image: string;
}

export const data: ItemSlider[] = [
  {
    id: "sih1",
    title: "¡A primavera chegou!",
    subtitle: "30% de desconto em roupas e acessórios. Apenas por tempo limitado",
    image: "/slider-hero/vestidos-verano.png",
    route: "#",
  },
  {
    id: "sih2",
    title: "Novo Smartphone Pro-X",
    subtitle: "¡Tecnologia Vanguardia com câmera 4K. Reserve o seu hoje!",
    image: "/slider-hero/phone.png",
    route: "#",
  },
  {
    id: "sih3",
    title: "2×1 Em casa",
    subtitle:
      "Ele carrega dois produtos pelo preço de um. Somente até o estoque",
    image: "/slider-hero/productos-hogar.png",
    route: "#",
  },
];
