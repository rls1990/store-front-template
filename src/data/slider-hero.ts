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
    title: "¡Llegó la Primavera!",
    subtitle: "30% OFF en ropa y accesorios. Solo por tiempo limitado",
    image: "/slider-hero/vestidos-verano.png",
    route: "#",
  },
  {
    id: "sih2",
    title: "Nuevo Smartphone Pro-X",
    subtitle: "Tecnología de vanguardia con cámara 4K. ¡Reserva el tuyo hoy!",
    image: "/slider-hero/phone.png",
    route: "#",
  },
  {
    id: "sih3",
    title: "2×1 en Hogar",
    subtitle:
      "Lleva dos productos por el precio de uno. Solo hasta agotar stock",
    image: "/slider-hero/productos-hogar.png",
    route: "#",
  },
];
