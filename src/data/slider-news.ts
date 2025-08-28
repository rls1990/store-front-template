export interface ItemSlider {
  id: string;
  message: string;
  icon: string;
}

export const data: ItemSlider[] = [
  {
    id: "0",
    message: "Frete grátis em pedidos acima de R$50",
    icon: "/slider-news/shopping.svg"
  },
  {
    id: "1",
    message: "Devoluções fáceis em 30 dias",
    icon: "/slider-news/return.svg"
  },
  {
    id: "2",
    message: "Atendimento ao cliente 24/7",
    icon: "/slider-news/support.svg"
  }
];
