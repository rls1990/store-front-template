import { getContactData } from "@/services/get-contact";
import { getSocialNetworksData } from "@/services/get-social-networks";
import Image from "next/image";

const Footer = async () => {
  const social_networks = await getSocialNetworksData();
  const contacts = await getContactData();

  return (
    <footer className="bg-gray-800 mt-12 text-gray-400 text-sm">
      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 [&_div]:pb-5 sm:[&_div]:pb-0">
        <div className="border-b-2 border-gray-700 sm:border-b-0 sm:border-r-2">
          <h4 className="font-semibold text-white mb-4">MiTienda</h4>
          <p className="text-balance p-1">
            Tu destino online para encontrar productos de calidad con envío
            rápido y excelente atención al cliente.
          </p>
        </div>
        <div className="border-b-2 border-gray-700 sm:border-b-0 md:border-r-2">
          <h4 className="font-semibold text-white mb-4">Sobre Nosotros</h4>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:text-white transition duration-150">
                Nuestra Historia
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition duration-150">
                Misión y Visión
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition duration-150">
                Únete a Nuestro Equipo
              </a>
            </li>
          </ul>
        </div>
        <div className="border-b-2 border-gray-700 sm:border-b-0 sm:border-r-2">
          <h4 className="font-semibold text-white mb-4">Atención al Cliente</h4>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:text-white transition duration-150">
                Contacto
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition duration-150">
                Preguntas Frecuentes
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition duration-150">
                Envíos y Devoluciones
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition duration-150">
                Política de Privacidad
              </a>
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-1">
          <h4 className="font-semibold text-white mb-4">Síguenos</h4>
          <div className="inline-flex gap-3">
            {social_networks.map((item) => (
              <a key={item.id + Date.now()} href={item.url}>
                <Image
                  src={item.image}
                  width={200}
                  height={200}
                  alt="social network"
                  className="size-[24px]"
                />
              </a>
            ))}
          </div>
          <div className="flex flex-col gap-1">
            {contacts.map((item) => (
              <div
                key={item.id + Date.now()}
                className="inline-flex items-center gap-2"
              >
                <Image
                  src={item.icon}
                  width={200}
                  height={200}
                  alt="contacts"
                  className="size-[24px]"
                />
                {item.value}
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mt-8 border-t border-gray-700 pt-8">
        &copy; 2025 MiTienda. Todos los derechos reservados.
      </div>
    </footer>
  );
};

export default Footer;
