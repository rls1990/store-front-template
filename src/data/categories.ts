export interface CategoryData {
  nombre: string;
  image: string;
  subcategories: string[];
}

export const data: CategoryData[] = [
  {
    nombre: "Eletrônica",
    image: "/categories/electronicos.png",
    subcategories: [
      "Smartphones",
      "Laptops",
      "Tablets",
      "Áudio",
      "TVs",
      "Câmeras",
      "Wearables",
      "Acessórios",
    ],
  },
  {
    nombre: "Roupas",
    image: "/categories/ropa.png",
    subcategories: [
      "T -shirts e tops",
      "Calça",
      "Vestidos e saias",
      "Jaquetas e casacos",
      "Roupa de baixo",
      "Pijamas",
      "Sportswear",
      "Acessórios de moda",
    ],
  },
  {
    nombre: "Lar",
    image: "/categories/hogar.png",
    subcategories: [
      "Móveis",
      "Decoração",
      "Iluminação",
      "Cozinha e Jantar",
      "Banheiro",
      "Têxteis",
      "Jardim e Exterior",
      "Pequenos Eletrodomésticos",
    ],
  },
  {
    nombre: "Calçados",
    image: "/categories/calzado.png",
    subcategories: [
      "Tênis",
      "Sapatos Casuais",
      "Sapatos Formais",
      "Botas",
      "Sandálias",
      "Saltos",
      "Calçado Esportivo",
      "Acessórios para calçados",
    ],
  },
  {
    nombre: "Brinquedos",
    image: "/categories/juguetes.png",
    subcategories: [
      "Brinquedos para bebês",
      "Jogos de tabuleiro",
      "Bonecas e Figuras de Ação",
      "Veículos de brinquedo",
      "Brinquedos Educativos",
      "Construção e Blocos",
      "Ar Livre e Esportes",
      "Fantasias e Acessórios",
    ],
  }
];
