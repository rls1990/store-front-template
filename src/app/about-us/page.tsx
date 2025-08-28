import Image from "next/image";
import { FiAward, FiShield, FiHeadphones } from "react-icons/fi";

const teamMembers = [
  {
    name: "Ana Martínez",
    role: "CEO & Fundadora",
    image: "/about-us/team-ana.jpg",
    bio: "Apaixonada por oferecer o melhor em produtos e experiência.",
  },
  {
    name: "Luis Fernández",
    role: "Diretor de Operações",
    image: "/about-us/team-luis.jpg",
    bio: "Garantindo entregas rápidas e confiáveis.",
  },
  {
    name: "Carla Gómez",
    role: "Marketing & Comunicação",
    image: "/about-us/team-carla.jpg",
    bio: "Conectando nossa marca aos nossos clientes.",
  },
  {
    name: "Javier López",
    role: "Atendimento ao Cliente",
    image: "/about-us/team-javier.jpg",
    bio: "Sempre pronto para ajudar você com qualquer dúvida.",
  },
];

const values = [
  {
    icon: <FiAward className="mx-auto mb-4 h-12 w-12 text-emerald-600" />,
    title: "Qualidade",
    description:
      "Trabalhamos apenas com os melhores fornecedores para garantir produtos duráveis e bem fabricados.",
  },
  {
    icon: <FiShield className="mx-auto mb-4 h-12 w-12 text-emerald-600" />,
    title: "Confiança",
    description:
      "Sua segurança e privacidade são nossa prioridade em cada compra e transação.",
  },
  {
    icon: <FiHeadphones className="mx-auto mb-4 h-12 w-12 text-emerald-600" />,
    title: "Atendimento",
    description:
      "Estamos sempre disponíveis para ajudar você e resolver suas dúvidas rapidamente.",
  },
];

export default function AboutUsPage() {
  return (
    <div className="">
      {/* Hero / Header */}
      <section className="bg-[url(/about-us/bg-about-us.png)] bg-cover bg-center text-white py-16 sm:py-24 px-4 sm:px-6 lg:px-8 text-center relative flex items-center justify-center">
        <div className="absolute w-full h-full bg-radial from-gray-700"></div>
        <div className="max-w-4xl mx-auto relative z-10">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
            Sobre nós
          </h1>
          <p className="text-lg sm:text-xl text-emerald-100 max-w-2xl mx-auto">
            Explore nossa seleção e viva a melhor experiência de compra on-line
          </p>
        </div>
      </section>

      {/* Nuestra Misión */}
      <section id="mision" className="py-16 px-6 sm:px-12 lg:px-24 bg-white text-gray-800">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-semibold mb-6 text-center border-b border-b-gray-300">
            Nossa missão
          </h2>
          <p className="text-lg leading-relaxed max-w-3xl mx-auto text-center">
            Em nossa loja online, estamos comprometidos em oferecer produtos de qualidade, a preços acessíveis e com um atendimento ao cliente excepcional. Queremos que cada compra para fazer é uma experiência memorável e satisfatória.
          </p>
        </div>
      </section>

      {/* Nuestro Equipo */}
      <section id="team" className="py-16 px-6 sm:px-12 lg:px-24 bg-gray-100 text-gray-900">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-semibold mb-10 text-center">
            Conheça nossa equipe
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {teamMembers.map((person) => (
              <div key={person.name} className="text-center">
                <Image
                  src={person.image}
                  alt={person.name}
                  width={500}
                  height={500}
                  className="mx-auto rounded-full w-32 h-32 object-cover mb-4 shadow-lg shadow-gray-300"
                />
                <h3 className="text-xl font-semibold">{person.name}</h3>
                <p className="text-emerald-700 font-semibold">{person.role}</p>
                <p className="mt-2 text-sm text-gray-600">{person.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Valores */}

      <section id="valores" className="py-20 px-6 sm:px-12 lg:px-24 bg-gradient-to-r from-white via-gray-50 to-white text-gray-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-extrabold mb-12 text-center tracking-wide text-emerald-700">
            Nossos valores
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 max-w-5xl mx-auto">
            {values.map(({ icon, title, description }) => (
              <div
                key={title}
                className="flex flex-col items-center p-8 bg-white border border-gray-200 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300"
              >
                <div className="text-indigo-500 mb-5 text-6xl">{icon}</div>
                <h3 className="text-2xl font-bold mb-3 text-center">{title}</h3>
                <p className="text-center text-gray-600 leading-relaxed">
                  {description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
