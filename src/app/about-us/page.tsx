import Image from "next/image";
import { FiAward, FiShield, FiHeadphones } from "react-icons/fi";

const teamMembers = [
  {
    name: "Ana Martínez",
    role: "CEO & Fundadora",
    image: "/about-us/team-ana.jpg",
    bio: "Apasionada por ofrecer lo mejor en productos y experiencia.",
  },
  {
    name: "Luis Fernández",
    role: "Director de Operaciones",
    image: "/about-us/team-luis.jpg",
    bio: "Garantizando entregas rápidas y confiables.",
  },
  {
    name: "Carla Gómez",
    role: "Marketing & Comunicación",
    image: "/about-us/team-carla.jpg",
    bio: "Conectando nuestra marca con nuestros clientes.",
  },
  {
    name: "Javier López",
    role: "Atención al Cliente",
    image: "/about-us/team-javier.jpg",
    bio: "Siempre listo para ayudarte con cualquier consulta.",
  },
];

const values = [
  {
    icon: <FiAward className="mx-auto mb-4 h-12 w-12 text-emerald-600" />,
    title: "Calidad",
    description:
      "Solo trabajamos con los mejores proveedores para asegurar productos duraderos y bien fabricados.",
  },
  {
    icon: <FiShield className="mx-auto mb-4 h-12 w-12 text-emerald-600" />,
    title: "Confianza",
    description:
      "Tu seguridad y privacidad son nuestra prioridad en cada compra y transacción.",
  },
  {
    icon: <FiHeadphones className="mx-auto mb-4 h-12 w-12 text-emerald-600" />,
    title: "Atención",
    description:
      "Estamos siempre disponibles para ayudarte y resolver tus dudas rápidamente.",
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
            Acerca de Nosotros
          </h1>
          <p className="text-lg sm:text-xl text-emerald-100 max-w-2xl mx-auto">
            Explora nuestra selección y vive la mejor experiencia de compra
            online
          </p>
        </div>
      </section>

      {/* Nuestra Misión */}
      <section className="py-16 px-6 sm:px-12 lg:px-24 bg-white text-gray-800">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-semibold mb-6 text-center border-b border-b-gray-300">
            Nuestra Misión
          </h2>
          <p className="text-lg leading-relaxed max-w-3xl mx-auto text-center">
            En nuestra tienda online, nos comprometemos a ofrecer productos de
            calidad, a precios accesibles y con un servicio al cliente
            excepcional. Queremos que cada compra que hagas sea una experiencia
            memorable y satisfactoria.
          </p>
        </div>
      </section>

      {/* Nuestro Equipo */}
      <section className="py-16 px-6 sm:px-12 lg:px-24 bg-gray-100 text-gray-900">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-semibold mb-10 text-center">
            Conoce a Nuestro Equipo
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

      <section className="py-20 px-6 sm:px-12 lg:px-24 bg-gradient-to-r from-white via-gray-50 to-white text-gray-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-extrabold mb-12 text-center tracking-wide text-emerald-700">
            Nuestros Valores
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
