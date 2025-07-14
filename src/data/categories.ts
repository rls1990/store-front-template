export interface CategoryData {
  nombre: string;
  image: string;
  subcategories: string[];
}

export const data: CategoryData[] = [
  {
    nombre: "Electrónica",
    image: "/categories/electronicos.png",
    subcategories: [
      "Smartphones",
      "Laptops",
      "Tablets",
      "Audio",
      "Televisores",
      "Cámaras",
      "Wearables",
      "Accesorios",
    ],
  },
  {
    nombre: "Ropa",
    image: "/categories/ropa.png",
    subcategories: [
      "Camisetas y Tops",
      "Pantalones",
      "Vestidos y Faldas",
      "Chaquetas y Abrigos",
      "Ropa Interior",
      "Pijamas",
      "Ropa Deportiva",
      "Accesorios de Moda",
    ],
  },
  {
    nombre: "Hogar",
    image: "/categories/hogar.png",
    subcategories: [
      "Muebles",
      "Decoración",
      "Iluminación",
      "Cocina y Comedor",
      "Baño",
      "Textiles",
      "Jardín y Exterior",
      "Electrodomésticos pequeños",
    ],
  },
  {
    nombre: "Calzado",
    image: "/categories/calzado.png",
    subcategories: [
      "Zapatillas",
      "Zapatos Casuales",
      "Zapatos Formales",
      "Botas",
      "Sandalias",
      "Tacones",
      "Calzado Deportivo",
      "Accesorios para calzado",
    ],
  },
  {
    nombre: "Juguetes",
    image: "/categories/juguetes.png",
    subcategories: [
      "Juguetes para bebés",
      "Juegos de mesa",
      "Muñecas y Figuras de Acción",
      "Vehículos de juguete",
      "Juguetes Educativos",
      "Construcción y Bloques",
      "Aire libre y Deportes",
      "Disfraces y Accesorios",
    ],
  },
];
