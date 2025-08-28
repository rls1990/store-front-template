import { getContactData } from "@/services/get-contact";
// import { getSocialNetworksData } from "@/services/get-social-networks";
import Image from "next/image";
import Link from "next/link";

const Footer = async () => {
  // const social_networks = await getSocialNetworksData();
  const contacts = await getContactData();

  return (
    <footer className="bg-gray-800 mt-12 text-gray-400 text-sm">
      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 [&_div]:pb-5 sm:[&_div]:pb-0">
        <div className="border-b-2 border-gray-700 sm:border-b-0 sm:border-r-2">
          <h4 className="font-semibold text-white mb-4">StoreAldinho</h4>
          <p className="text-balance p-1">
            Seu destino on -line para encontrar produtos de qualidade com frete Atendimento ao cliente rápido e excelente.
          </p>
        </div>
        <div className="border-b-2 border-gray-700 sm:border-b-0 md:border-r-2">
          <h4 className="font-semibold text-white mb-4">Sobre nós</h4>
          <ul className="space-y-2">
            <li>
              <Link href="/about-us#mision" className="hover:text-white transition duration-150">
                Nossa missão
              </Link>
            </li>
            <li>
              <Link href="/about-us#team" className="hover:text-white transition duration-150">
                Nossa equipe
              </Link>
            </li>
            <li>
              <Link href="/about-us#valores" className="hover:text-white transition duration-150">
                Valores
              </Link>
            </li>
          </ul>
        </div>
        <div className="border-b-2 border-gray-700 sm:border-b-0 sm:border-r-2">
          <h4 className="font-semibold text-white mb-4">Atendimento ao Cliente</h4>
          <ul className="space-y-2">
            <li>
              <Link href="/contact" className="hover:text-white transition duration-150">
                Contato
              </Link>
            </li>
            {/* <li>
              <Link href="#" className="hover:text-white transition duration-150">
                Preguntas Frecuentes
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-white transition duration-150">
                Envíos y Devoluciones
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-white transition duration-150">
                Política de Privacidad
              </Link>
            </li> */}
          </ul>
        </div>
        <div className="flex flex-col gap-1">
          <h4 className="font-semibold text-white mb-4">Siga -nos</h4>
          {/* <div className="inline-flex gap-3">
            {social_networks.map((item) => (
              <Link target="_blank" key={item.id + Date.now()} href={item.url}>
                <Image
                  src={item.image}
                  width={200}
                  height={200}
                  alt="social network"
                  className="size-[24px]"
                />
              </Link>
            ))}
          </div> */}
          <div className="flex flex-col gap-1">
            <Link
              href="https://www.facebook.com/share/16a1XoyX88"
              className="inline-flex items-center gap-2"
              target="_blank"
            >
              <Image
                src="/social-networks/facebook.svg"
                width={200}
                height={200}
                alt="social network"
                className="size-[24px]"
              />
              https://www.facebook.com/
            </Link>
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
        &copy; 2025 StoreAldinho. Todos os direitos reservados.
      </div>
    </footer>
  );
};

export default Footer;
