export interface ProductData {
  id: number;
  name: string;
  rating: number;
  number_comments?: number;
  description: string;
  descripcion_detallada?: string;
  category: string;
  subcategory: string;
  price: number;
  image: string;
  isNew?: boolean;
  isOffer?: boolean;
  priceOffer?: number;
  marca: string;
  colors: string[];
  size?: string[];
}

// Creación de arreglos para marcas y colores
// Arreglo de marcas únicas usadas
export const marcas: string[] = [
  "Samsung",
  "Xiaomi",
  "Huawei",
  "Realme",
  "Motorola",
  "Oppo",
  "Honor",
  "Apple",
  "Dell",
  "Asus",
  "Lenovo",
  "Acer",
  "MSI",
  "HP",
  "Amazon",
  "Bose",
  "JBL",
  "Sony",
];

export const products: ProductData[] = [
  {
    id: 1,
    name: "Smartphone Alpha X100",
    rating: 4.5,
    number_comments: 120,
    description:
      "Tela AMOLED de 6,5 polegadas, câmera tripla e bateria de longo prazo.",
    descripcion_detallada:
      "O smartphone Alpha X100 se destaca por sua impressionante tela Super AMOLED de 6,5 polegadas com resolução Full HD+ e uma taxa de refresco de 120Hz. Ele está equipado com um processador octa-core e 8 GB de RAM, e seu sistema de câmera tripla inclui um sensor principal de 64 MP, um ultra amplo angular de 12 MP e um sensor macro de 5 MP. Sua bateria de 4500 mAh é compatível com carga rápida de 25W. Além disso, possui certificação IP67 para resistência à água e poeira e alto -falantes estéreo com som Dolby Atmos.",
    category: "Eletrônica",
    subcategory: "Smartphones",
    price: 499,
    image: "/products/Smartphone Alpha X100.jpg",
    marca: "samsung",
    colors: ["negro", "blanco", "azul"],
    isNew: true,
    size: ["6.5 pulgadas", "6.7 pulgadas"],
  },
  {
    id: 2,
    name: "Telefone Beta Pro",
    rating: 4.2,
    number_comments: 75,
    description:
      "Design elegante, câmera dupla e processador poderoso para multitarefa.",
    descripcion_detallada:
      "O Beta Pro Phone combina um design moderno com desempenho excepcional. Sua tela IPS de 6,2 polegadas oferece cores brilhantes e brilhantes. No interior, um processador Mediatek Helio G90T e 6 GB de RAM garantem uma experiência fluida. A câmera dupla de 48 MP + 8 MP permite capturar fotos claras e detalhadas. Sua bateria de 4200 mAh suporta um carregamento rápido de 18W e possui um sensor de impressão digital traseira para maior segurança.",
    category: "Eletrônica",
    subcategory: "Smartphones",
    price: 399,
    image: "/products/Telefono Beta Pro.jpg",
    marca: "xiaomi",
    colors: ["gris", "negro", "rojo"],
    size: ["6.2 pulgadas", "6.5 pulgadas"],
  },
  {
    id: 3,
    name: "Celular Gamma 5G",
    rating: 4.7,
    number_comments: 200,
    description: "Compatível com 5G, tela ultra nítida e carregamento rápido.",
    descripcion_detallada:
      "O Celular Gamma 5G é perfeito para a conectividade de próxima geração. Com uma tela OLED de 6,7 polegadas, você desfrutará de cores intensas e contrastes profundos. Seu processador Kirin 990 5G e 8 GB de RAM proporcionam desempenho de alta velocidade. A câmera principal de 50 MP com tecnologia Ultra Vision captura fotos impressionantes em qualquer condição de luz. Além disso, sua bateria de 4300 mAh com carregamento rápido de 66W permite recarregar o dispositivo em minutos.",
    category: "Eletrônica",
    subcategory: "Smartphones",
    price: 599,
    image: "/products/Celular Gamma 5G.jpg",
    marca: "huawei",
    colors: ["negro", "gris"],
    isOffer: true,
    priceOffer: 549,
    size: ["6,7 polegadas - 6,9 polegadas", "6,9 polegadas - 7,2 polegadas"]
  },
  {
    id: 4,
    name: "Smartphone Delta Mini",
    rating: 4.0,
    number_comments: 60,
    description: "Compacto, fácil de usar e com boa autonomia.",
    descripcion_detallada:
      "O Smartphone Delta Mini é a opção ideal para quem prefere um dispositivo compacto. Com uma tela HD+ de 5,8 polegadas, é fácil de manusear com uma mão só. Funciona com um processador Snapdragon 480 5G e 4 GB de RAM, ideal para tarefas diárias. Sua bateria de 4000 mAh assegura autonomia suficiente para o dia todo. A câmera principal de 13 MP permite capturar momentos com clareza.",
    category: "Eletrônica",
    subcategory: "Smartphones",
    price: 299,
    image: "/products/Smartphone Delta Mini.jpg",
    marca: "realme",
    colors: ["azul", "blanco"],
    size: ["5,8 polegadas", "6,0 polegadas"]
  },
  {
    id: 5,
    name: "Phone Zeta Plus",
    rating: 4.6,
    number_comments: 85,
    description: "Tela grande, bateria duradoura e câmera aprimorada.",
    descripcion_detallada:
      "O Phone Zeta Plus oferece uma experiência visual imersiva com sua tela Max Vision de 6,8 polegadas. O processador Snapdragon 765 e 6 GB de RAM proporcionam um desempenho fluido para jogos e aplicativos. Seu sistema de câmera de 64 MP com tecnologia Quad Pixel garante fotos de alta resolução mesmo com pouca luz. A bateria de 5000 mAh permite usar o telefone por mais de um dia sem se preocupar com a carga.",
    category: "Eletrônica",
    subcategory: "Smartphones",
    price: 450,
    image: "/products/Phone Zeta Plus.jpg",
    marca: "motorola",
    colors: ["negro", "gris"],
    size: ["6,8 polegadas", "7,0 polegadas"]
  },
  {
    id: 6,
    name: "Smartphone Epsilon S",
    rating: 4.3,
    number_comments: 110,
    description: "Desempenho sólido e câmera frontal para selfies.",
    descripcion_detallada:
      "O Smartphone Epsilon S é um dispositivo confiável com uma tela AMOLED de 6,4 polegadas. Equipado com um processador Mediatek Dimensity 900 e 8 GB de RAM, oferece um desempenho estável. Sua câmera frontal de 32 MP com IA é perfeita para selfies de alta qualidade, enquanto a câmera traseira de 50 MP captura fotos vibrantes. A bateria de 4300 mAh com carregamento rápido de 33W garante que você esteja sempre conectado.",
    category: "Eletrônica",
    subcategory: "Smartphones",
    price: 420,
    image: "/products/Smartphone Epsilon S.jpg",
    marca: "oppo",
    colors: ["blanco", "negro", "rojo"],
    size: ["6,4 polegadas", "6,6 polegadas"]
  },
  {
    id: 7,
    name: "Telefone Theta Max",
    rating: 4.1,
    number_comments: 95,
    description: "Alta durabilidade, bateria resistente e tela HD.",
    descripcion_detallada:
      "O Telefone Theta Max foi projetado para durar. Seu chassi reforçado o torna resistente a quedas e golpes. A tela HD+ de 6,5 polegadas é ideal para o uso diário. Com um processador Snapdragon 662 e 4 GB de RAM, administra os aplicativos básicos com facilidade. Sua grande bateria de 6000 mAh oferece uma autonomia excepcional, perfeita para uso prolongado sem necessidade de recarga. A câmera principal de 16 MP permite tirar fotos de boa qualidade.",
    category: "Eletrônica",
    subcategory: "Smartphones",
    price: 350,
    image: "/products/Teléfono Theta Max.jpg",
    marca: "honor",
    colors: ["negro", "azul"],
    isOffer: true,
    priceOffer: 300,
    size: ["6,5 polegadas", "6,7 polegadas"]
  },
  {
    id: 8,
    name: "Smartphone Iota Pro",
    rating: 4.4,
    number_comments: 130,
    description:
      "Processador rápido, câmera tripla e sistema operacional atualizado.",
    descripcion_detallada:
      "O Smartphone Iota Pro oferece um desempenho de primeira classe com seu processador A15 Bionic e 6 GB de RAM. Sua tela Liquid Retina HD de 6,1 polegadas é um deleite visual. O sistema de câmera tripla de 12 MP com modo noturno e Deep Fusion permite capturar fotos e vídeos com qualidade profissional. Além disso, conta com o último sistema operacional, segurança avançada com Face ID e carregamento sem fio MagSafe.",
    category: "Eletrônica",
    subcategory: "Smartphones",
    price: 480,
    image: "/products/Smartphone Iota Pro.jpg",
    marca: "apple",
    colors: ["negro", "blanco", "dorado"],
    size: ["6,1 polegadas", "6,7 polegadas"]
  },
  {
    id: 9,
    name: "Laptop UltraBook 15",
    rating: 4.6,
    number_comments: 140,
    description: "Laptop leve com processador Intel i7 e 16GB RAM.",
    descripcion_detallada:
      "O Laptop UltraBook 15 é um equipamento ultraleve e elegante, perfeito para mobilidade. Impulsionado por um processador Intel Core i7 de 11ª geração e 16 GB de RAM, oferece desempenho rápido para produtividade e multitarefa. Sua tela de 15,6 polegadas com resolução Full HD e bordas finas maximiza a área de visualização. Com armazenamento SSD de 512 GB, a inicialização e o carregamento de aplicativos são instantâneos. Sua bateria de longa duração permite trabalhar o dia todo sem interrupções.",
    category: "Eletrônica",
    subcategory: "Laptops",
    price: 1200,
    image: "/products/Laptop UltraBook 15.jpg",
    marca: "dell",
    colors: ["gris", "negro"],
    isNew: true,
    size: ["13 polegadas", "15 polegadas"]
  },
  {
    id: 10,
    name: "Notebook Gamer GX",
    rating: 4.8,
    number_comments: 210,
    description:
      "Laptop para jogos com placa gráfica avançada e tela de 144Hz.",
    descripcion_detallada:
      "A Notebook Gamer GX foi projetada para os entusiastas de videogames. Equipado com uma placa gráfica NVIDIA GeForce RTX 3070 e um processador Intel Core i9, oferece um desempenho gráfico impressionante. Sua tela de 15,6 polegadas com taxa de atualização de 144Hz e tempo de resposta de 3ms garante uma experiência de jogo ultra fluida e sem 'ghosting'. O sistema avançado de refrigeração evita o superaquecimento durante longas sessões de jogo. Inclui teclado retroiluminado RGB personalizável e som envolvente para você se imergir completamente na ação.",
    category: "Eletrônica",
    subcategory: "Laptops",
    price: 1800,
    image: "/products/Notebook Gamer GX.jpg",
    marca: "asus",
    colors: ["negro", "rojo"],
    size: ["15,6 polegadas", "17,3 polegadas"]
  },
  {
    id: 11,
    name: "Laptop Business Pro",
    rating: 4.4,
    number_comments: 90,
    description:
      "Ideal para trabalho com segurança e bateria de longa duração.",
    descripcion_detallada:
      "A Laptop Business Pro é a companheira perfeita para o ambiente profissional. Com um processador Intel Core i5 e 8 GB de RAM, permite que você trabalhe de maneira eficiente. Conta com recursos avançados de segurança como leitor de impressões digitais e chip TPM. Sua bateria de longa duração possibilita realizar reuniões e trabalhar em movimento sem preocupações. Seu chassi robusto e design elegante a tornam uma opção durável e profissional.",
    category: "Eletrônica",
    subcategory: "Laptops",
    price: 1100,
    image: "/products/Laptop Business Pro.jpg",
    marca: "lenovo",
    colors: ["gris", "negro"],
    size: ["14 polegadas", "15 polegadas"]
  },
  {
    id: 12,
    name: "Laptop Student Light",
    rating: 4.2,
    number_comments: 70,
    description: "Compacta e econômica para estudantes, boa conectividade.",
    descripcion_detallada:
      "A Laptop Student Light é um equipamento acessível, projetado para as necessidades dos estudantes. Seu design compacto e leve a torna fácil de transportar na mochila. Com um processador Intel Celeron e 4 GB de RAM, é ideal para navegar na internet, tomar notas e realizar trabalhos escolares. Conta com todas as portas necessárias, incluindo USB-C e HDMI, para conectar a periféricos e monitores externos. Sua bateria de longa duração permite estudar na biblioteca ou no campus sem necessidade de carregador.",
    category: "Eletrônica",
    subcategory: "Laptops",
    price: 650,
    image: "/products/Laptop Student Light.jpg",
    marca: "acer",
    colors: ["negro", "azul"],
    size: ["11,6 polegadas", "13,3 polegadas"]
  },
  {
    id: 13,
    name: "Laptop Creator 16",
    rating: 4.7,
    number_comments: 120,
    description: "Tela 4K e hardware potente para criação de conteúdo.",
    descripcion_detallada:
      "A Laptop Creator 16 é a ferramenta definitiva para criadores de conteúdo. Sua tela OLED de 16 polegadas com resolução 4K e cobertura de 100% do espaço de cor DCI-P3 oferece uma precisão de cor excepcional. Com um processador Intel Core i9 e uma placa gráfica NVIDIA GeForce RTX 3080, esta laptop lida sem problemas com edição de vídeo, renderização 3D e design gráfico. Seu sistema de refrigeração eficiente e teclado de alta precisão permitem que você trabalhe em seus projetos mais exigentes com conforto.",
    category: "Eletrônica",
    subcategory: "Laptops",
    price: 2100,
    image: "/products/Laptop Creator 16.jpg",
    marca: "apple",
    colors: ["gris", "negro"],
    size: ["16 polegadas"],
    isOffer: true,
    priceOffer: 2000
  },
  {
    id: 14,
    name: "Laptop ZenBook S",
    rating: 4.5,
    number_comments: 100,
    description:
      "Ultraleve e com grande autonomia para profissionais em movimento.",
    descripcion_detallada:
      "A Laptop ZenBook S redefine a portabilidade com seu design ultraleve e fino. Equipada com um processador Intel Core i7 de baixo consumo e 16 GB de RAM, oferece um desempenho potente e eficiente. Sua tela NanoEdge Full HD de 13,3 polegadas com bordas ultrafinas proporciona uma experiência visual imersiva. Com uma bateria que dura até 15 horas, é perfeita para profissionais que viajam constantemente. Além disso, sua carcaça de alumínio de alta qualidade confere uma aparência premium e durabilidade.",
    category: "Eletrônica",
    subcategory: "Laptops",
    price: 1300,
    image: "/products/Laptop ZenBook S.jpg",
    marca: "asus",
    colors: ["azul", "negro"],
    isOffer: true,
    priceOffer: 1199,
    size: ["13,3 polegadas", "14 polegadas"]
  },
  {
    id: 15,
    name: "Gaming Laptop Titan",
    rating: 4.9,
    number_comments: 250,
    description: "Desempenho máximo com processador e placa gráfica gamer.",
    descripcion_detallada:
      "A Gaming Laptop Titan é uma potência de desempenho. Equipada com um processador AMD Ryzen 9 e uma placa gráfica NVIDIA GeForce RTX 3080 Ti, esta máquina pode rodar qualquer jogo na configuração mais alta. Sua tela QHD de 17,3 polegadas com taxa de atualização de 240Hz te mergulha no jogo. O sistema de refrigeração de dois ventiladores e múltiplos tubos de calor mantém as temperaturas sob controle. O teclado mecânico e o som envolvente Nahimic aprimoram ainda mais a experiência de jogo.",
    category: "Eletrônica",
    subcategory: "Laptops",
    price: 2500,
    image: "/products/Gaming Laptop Titan.jpg",
    marca: "msi",
    colors: ["negro", "rojo"],
    size: ["17,3 polegadas"]
  },
  {
    id: 16,
    name: "Laptop Basic Model",
    rating: 4.0,
    number_comments: 50,
    description: "Modelo básico para uso geral e navegação.",
    descripcion_detallada:
      "A Laptop Basic Model é uma opção econômica e funcional para o uso diário. Com um processador Intel Pentium e 4 GB de RAM, é ideal para navegação na web, e-mail e documentos de escritório. Sua tela de 15,6 polegadas é grande o suficiente para trabalhar e assistir vídeos com conforto. O armazenamento SSD de 128 GB garante que o sistema operacional e os aplicativos carreguem rapidamente. É perfeita para estudantes ou usuários que precisam de um equipamento simples e confiável.",
    category: "Eletrônica",
    subcategory: "Laptops",
    price: 500,
    image: "/products/Laptop Basic Model.jpg",
    marca: "hp",
    colors: ["gris", "negro"],
    size: ["15,6 polegadas"]
  },
  {
    id: 17,
    name: "Tablet Aura 10",
    rating: 4.3,
    number_comments: 90,
    description:
      "Tablet com tela de 10 polegadas, perfeita para multimídia.",
    descripcion_detallada:
      "O Tablet Aura 10 é um dispositivo multimídia versátil. Com uma tela IPS de 10,1 polegadas, oferece uma qualidade de imagem nítida para assistir filmes e séries. Equipado com um processador octa-core e 4 GB de RAM, lida com aplicativos e jogos com fluidez. Seus alto-falantes estéreo sintonizados pela AKG proporcionam um som envolvente. A bateria de 7040 mAh garante horas de entretenimento.",
    category: "Eletrônica",
    subcategory: "Tablets",
    price: 350,
    image: "/products/Tablet Aura 10.jpg",
    marca: "samsung",
    colors: ["negro", "blanco", "gris"],
    size: ["10,1 polegadas", "10,5 polegadas"]
  },
  {
    id: 18,
    name: "Tablet Pro Max",
    rating: 4.7,
    number_comments: 150,
    description:
      "Tablet para profissionais com teclado magnético e lápis touch.",
    descripcion_detallada:
      "O Tablet Pro Max é a ferramenta definitiva para profissionais e criativos. Sua tela Liquid Retina XDR de 12,9 polegadas com tecnologia ProMotion oferece cores precisas e uma resposta tátil excepcional. Impulsionado por um chip M1, tem desempenho comparável ao de um computador. Inclui teclado magnético e é compatível com o Apple Pencil, ideal para desenhar, editar e trabalhar em qualquer lugar. O sistema de câmera TrueDepth permite usar Face ID para desbloqueio seguro.",
    category: "Eletrônica",
    subcategory: "Tablets",
    price: 650,
    image: "/products/Tablet Pro Max.jpg",
    marca: "apple",
    colors: ["gris", "blanco"],
    isNew: true,
    size: ["11 polegadas", "12,9 polegadas"]
  },
  {
    id: 19,
    name: "Tablet Mini Light",
    rating: 4.1,
    number_comments: 60,
    description: "Compacta, leve e com boa autonomia.",
    descripcion_detallada:
      "O Tablet Mini Light é perfeito para levar a qualquer lugar. Seu tamanho compacto de 8 polegadas é ideal para ler, assistir vídeos e navegar na internet a qualquer momento. Com processador Quad-Core e 2 GB de RAM, oferece desempenho básico e eficiente. Sua bateria de 5100 mAh proporciona até 12 horas de autonomia. O design robusto e seu peso leve a tornam a companheira de viagem perfeita.",
    category: "Eletrônica",
    subcategory: "Tablets",
    price: 280,
    image: "/products/Tablet Mini Light.jpg",
    marca: "amazon",
    colors: ["blanco", "gris"],
    size: ["8 polegadas", "8,7 polegadas"]
  },
  {
    id: 20,
    name: "Tablet Plus 12",
    rating: 4.5,
    number_comments: 120,
    description:
      "Tela grande e tecnologia avançada para edição multimídia.",
    descripcion_detallada:
      "O Tablet Plus 12 é um dispositivo de alto desempenho para criação de conteúdo e consumo multimídia. Sua tela Super AMOLED de 12,4 polegadas com resolução de 2800x1752 pixels oferece qualidade de imagem excepcional. Equipado com processador Snapdragon 8 Gen 1 e 8 GB de RAM, lida facilmente com as tarefas mais exigentes. A caneta S Pen incluída permite fazer anotações e desenhos com incrível precisão.",
    category: "Eletrônica",
    subcategory: "Tablets",
    price: 700,
    image: "/products/Tablet Plus 12.jpg",
    marca: "samsung",
    colors: ["blanco", "negro", "azul"],
    size: ["12,4 polegadas"]
  },
  {
    id: 21,
    name: "Tablet Basic Model",
    rating: 4.0,
    number_comments: 45,
    description: "Ideal para uso cotidiano e navegação básica.",
    descripcion_detallada:
      "O Tablet Basic Model é uma opção econômica para uso diário. Com tela HD de 10,3 polegadas e processador MediaTek Helio P22T, é ideal para navegar na internet, assistir vídeos e ler. Sua bateria de 5000 mAh oferece uma autonomia razoável para o dia a dia. É um tablet perfeito para casa, para as crianças assistirem desenhos ou para ler seus livros favoritos.",
    category: "Eletrônica",
    subcategory: "Tablets",
    price: 250,
    image: "/products/Tablet Basic Model.jpg",
    marca: "lenovo",
    colors: ["gris", "negro"],
    size: ["10,3 polegadas", "10,6 polegadas"]
  },
  {
    id: 22,
    name: "Tablet Gamer X",
    rating: 4.6,
    number_comments: 130,
    description: "Otimizada para jogos com tela de alta frequência.",
    descripcion_detallada:
      "O Tablet Gamer X foi projetado para oferecer uma experiência de jogo superior. Sua tela LCD de 11 polegadas com taxa de atualização de 144Hz e resolução de 2560x1600 pixels garante jogabilidade fluida e sem interrupções. O processador Snapdragon 870 e 8 GB de RAM fornecem a potência necessária para rodar jogos exigentes. Seu sistema avançado de refrigeração e alto-falantes estéreo com som Harman Kardon te imergem totalmente na ação.",
    category: "Eletrônica",
    subcategory: "Tablets",
    price: 600,
    image: "/products/Tablet Gamer X.jpg",
    marca: "asus",
    colors: ["negro", "rojo"],
    size: ["11 polegadas"]
  },
  {
    id: 23,
    name: "Tablet Artist Pro",
    rating: 4.8,
    number_comments: 100,
    description: "Inclui lápis touch sensível para desenho e design.",
    descripcion_detallada:
      "O Tablet Artist Pro é a ferramenta perfeita para artistas digitais e designers gráficos. Sua tela Liquid Retina XDR de 12,9 polegadas oferece precisão de cor e brilho excepcionais. O lápis touch incluído tem latência ultrabaixa e 4096 níveis de pressão, permitindo desenhar e pintar com grande realismo. Com o poderoso chip M2, o desempenho é superior para edição de fotos e vídeos, design 3D e desenho. Além disso, conta com câmera grande angular e scanner LiDAR.",
    category: "Eletrônica",
    subcategory: "Tablets",
    price: 720,
    image: "/products/Tablet Artist Pro.jpg",
    marca: "apple",
    colors: ["blanco", "gris", "negro"],
    isOffer: true,
    priceOffer: 680,
    size: ["12,9 polegadas"]
  },
  {
    id: 24,
    name: "Tablet Family",
    rating: 4.2,
    number_comments: 75,
    description: "Tablet resistente para uso familiar e educacional.",
    descripcion_detallada:
      "O Tablet Family é um dispositivo durável projetado para uso familiar. Seu chassi robusto e capa protetora o tornam resistente a quedas e impactos. Sua tela de 10,4 polegadas é grande o suficiente para assistir filmes e fazer videochamadas. O processador Octa-Core e 3 GB de RAM garantem desempenho fluido. Além disso, conta com controles parentais que permitem aos pais supervisionar e limitar o conteúdo para as crianças.",
    category: "Eletrônica",
    subcategory: "Tablets",
    price: 300,
    image: "/products/Tablet Family.jpg",
    marca: "samsung",
    colors: ["negro", "gris", "azul"],
    size: ["8,7 polegadas", "10,4 polegadas"]
  },
  {
    id: 25,
    name: "Fones Bluetooth Pro",
    rating: 4.5,
    number_comments: 150,
    description: "Fones sem fio com cancelamento de ruído.",
    descripcion_detallada:
      "Os Fones Bluetooth Pro oferecem uma experiência sonora imersiva com tecnologia de cancelamento ativo de ruído. Seu design ergonômico e almofadas de espuma com memória garantem ajuste confortável por horas. O som de alta fidelidade e os graves profundos permitem curtir sua música favorita com muito detalhe. Com autonomia de até 24 horas e estojo de carregamento, você pode levar sua música para qualquer lugar. Possuem controles táteis intuitivos para gerenciar músicas e chamadas.",
    category: "Eletrônica",
    subcategory: "Audio",
    price: 150,
    image: "/products/Auriculares Bluetooth Pro.jpg",
    marca: "bose",
    colors: ["negro", "blanco"],
    size: ["tamanho único"]
  },
  {
    id: 26,
    name: "Caixa de Som Portátil MaxSound",
    rating: 4.6,
    number_comments: 130,
    description: "Som potente em uma caixa compacta e resistente.",
    descripcion_detallada:
      "A Caixa de Som Portátil MaxSound oferece som potente e claro em design compacto. Com a tecnologia BassUp, os graves são profundos e vibrantes. Sua construção resistente e certificação IPX7 a tornam à prova d'água, ideal para praia, piscina ou montanha. A bateria de íons de lítio de alta capacidade oferece até 15 horas de música. Você pode conectar duas caixas para som estéreo imersivo. A conectividade Bluetooth 5.0 garante conexão estável e rápida.",
    category: "Eletrônica",
    subcategory: "Audio",
    price: 120,
    image: "/products/Parlante Portátil MaxSound.jpg",
    marca: "jbl",
    colors: ["negro", "azul"],
    size: ["pequeno", "médio"]
  },
  {
    id: 27,
    name: "Barra de Som Home Cinema",
    rating: 4.7,
    number_comments: 110,
    description: "Experiência imersiva com som surround 5.1.",
    descripcion_detallada:
      "A Barra de Som Home Cinema transforma sua sala em um cinema. Com sistema de som surround 5.1, você se envolve na ação dos seus filmes e séries favoritos. Inclui um subwoofer sem fio para graves profundos e potentes, e alto-falantes satélite para som multidimensional. Compatível com formatos de áudio como Dolby Digital e DTS. A conexão HDMI ARC permite controlá-la pelo controle remoto da sua TV.",
    category: "Eletrônica",
    subcategory: "Audio",
    price: 300,
    image: "/products/Barra de Sonido Home Cinema.jpg",
    marca: "sony",
    colors: ["negro", "gris"],
    size: ["90 cm", "120 cm"]
  },
  {
    id: 28,
    name: "Fones Esportivos FitSound",
    rating: 4.3,
    number_comments: 70,
    description: "Fones resistentes ao suor, ideais para treinos.",
    descripcion_detallada:
      "Os Fones Esportivos FitSound são a escolha perfeita para suas sessões de treino. Com certificação IPX4, são resistentes ao suor e respingos de água. Seu design com gancho na orelha garante ajuste seguro e confortável, mesmo durante exercícios intensos. Os drivers dinâmicos de 10 mm oferecem som potente com graves aprimorados. A bateria de longa duração permite treinar por horas sem interrupções. O microfone integrado com cancelamento de ruído permite chamadas claras enquanto você se exercita.",
    category: "Eletrônica",
    subcategory: "Audio",
    price: 80,
    image: "/products/Auriculares Deportivos FitSound.jpg",
    marca: "jbl",
    colors: ["negro", "verde"],
    isNew: true,
    size: ["tamanho único"]
  },
  {
    id: 29,
    name: "Caixa de Som Bluetooth Mini",
    rating: 4.0,
    number_comments: 55,
    description: "Pequena, leve e com boa qualidade de som.",
    descripcion_detallada:
      "A Caixa de Som Bluetooth Mini é ideal para ouvir música em qualquer lugar. Seu tamanho compacto e peso leve facilitam o transporte no bolso ou na mochila. Apesar do tamanho, oferece som surpreendentemente claro e potente. A bateria recarregável oferece até 5 horas de música. Você pode conectá-la ao seu telefone ou tablet via Bluetooth ou usar a entrada de áudio auxiliar.",
    category: "Eletrônica",
    subcategory: "Audio",
    price: 50,
    image: "/products/Parlante Bluetooth Mini.jpg",
    marca: "sony",
    colors: ["negro", "blanco"],
    size: ["mini"]
  },
];
