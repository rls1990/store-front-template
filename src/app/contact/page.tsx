import { BsSend } from "react-icons/bs";
import {
  FaClock,
  FaEnvelope,
  FaMapMarkedAlt,
  FaPhoneAlt,
} from "react-icons/fa";

export default function ContactPage() {
  const access_key = "df137079-4063-4415-9b3a-53cca4485edb";
  return (
    <>
      <section className="bg-[url(/contacts/bg-contact.png)] bg-cover bg-center text-white py-16 sm:py-24 px-4 sm:px-6 lg:px-8 text-center relative flex items-center justify-center">
        <div className="absolute w-full h-full bg-radial from-gray-700"></div>
        <div className="max-w-4xl mx-auto z-20">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
            Contáctanos
          </h1>
          <p className="text-lg sm:text-xl text-emerald-100">
            Estamos aquí para ayudarte. Envíanos un mensaje o encuentra nuestra
            información de contacto.
          </p>
        </div>
      </section>

      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto bg-white rounded-lg shadow-xl overflow-hidden lg:grid lg:grid-cols-3 lg:gap-12 p-8">
          <div className="lg:col-span-1 mb-8 lg:mb-0">
            <h2 className="text-2xl font-bold text-emerald-700 mb-6 border-b border-b-gray-300 pb-4">
              Detalles de Contacto
            </h2>
            <div className="space-y-6 text-gray-700">
              <div className="flex items-start">
                <FaMapMarkedAlt className="text-emerald-700 text-xl mr-4 mt-1 size-7" />
                <div>
                  <h3 className="text-lg font-semibold text-emerald-700">
                    Dirección
                  </h3>
                  <p>Camama</p>

                </div>
              </div>
              <div className="flex items-start">
                <FaPhoneAlt className="text-emerald-700 text-xl mr-4 mt-1 size-6" />
                <div>
                  <h3 className="text-lg font-semibold text-emerald-700">
                    Teléfono
                  </h3>
                  <p>+244931903813</p>
                  <p>+244953961847</p>
                </div>
              </div>
              <div className="flex items-start">
                <FaEnvelope className="text-emerald-700 text-xl mr-4 mt-1 size-6" />
                <div>
                  <h3 className="text-lg font-semibold text-emerald-700">
                    Correo Electrónico
                  </h3>
                  <p>aldinholopes4@gmail.com</p>
                </div>
              </div>
              <div className="flex items-start">
                <FaClock className="text-emerald-700 text-xl mr-4 mt-1 size-6" />
                <div>
                  <h3 className="text-lg font-semibold text-emerald-700">
                    Horario de Atención
                  </h3>
                  <p>Lunes a Viernes: 9:00 AM - 6:00 PM</p>
                  <p>Sábados: 10:00 AM - 2:00 PM</p>
                  <p>Domingos: Cerrado</p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold text-emerald-700 mb-6 border-b border-b-gray-300 pb-4">
              Envíanos un Mensaje
            </h2>
            <form action="https://api.web3forms.com/submit" method="POST" className="space-y-6">
              <input type="hidden" name="access_key" value={access_key}></input>
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Nombre Completo
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  autoComplete="name"
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-2 focus:ring-emerald-700 focus:ring-opacity-50 focus:border-transparent sm:text-sm"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Correo Electrónico
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  autoComplete="email"
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-2 focus:ring-emerald-700 focus:ring-opacity-50 focus:border-transparent sm:text-sm"
                />
              </div>
              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-gray-700"
                >
                  Asunto (Opcional)
                </label>
                <input
                  type="text"
                  name="subject"
                  id="subject"
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-2 focus:ring-emerald-700 focus:ring-opacity-50 focus:border-transparent sm:text-sm"
                />
              </div>
              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-gray-700"
                >
                  Teléfono *
                </label>
                <input
                  type="tel"
                  name="phone"
                  required
                  id="phone"
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-2 focus:ring-emerald-700 focus:ring-opacity-50 focus:border-transparent sm:text-sm"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700"
                >
                  Mensaje
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-2 focus:ring-emerald-700 focus:ring-opacity-50 focus:border-transparent sm:text-sm"
                ></textarea>
              </div>
              <div>
                <button
                  type="submit"
                  className="inline-flex justify-center items-center gap-2 py-2 px-6 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-emerald-600 hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500 transition duration-150 cursor-pointer"
                >
                  <BsSend className="size-5" />
                  Enviar Mensaje
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
