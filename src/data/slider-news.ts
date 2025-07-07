export interface ItemSlider {
  id: string;
  message: string;
  icon: string;
}

export const data: ItemSlider[] = [
  {
    id: "0",
    message: "Envío Gratis en pedidos superiores a $50",
    icon: "/slider-news/shopping.svg",
  },
  {
    id: "1",
    message: "Devoluciones Fáciles en 30 días",
    icon: "/slider-news/return.svg",
  },
  {
    id: "2",
    message: "Soporte al Cliente 24/7",
    icon: "/slider-news/support.svg",
  },
];
