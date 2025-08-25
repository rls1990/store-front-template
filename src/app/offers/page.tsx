import { OfferList } from "@/components/offers/OfferList";
import { FaCalendarAlt, FaGift, FaTags } from "react-icons/fa";

export default function OffersPage() {
  return (
    <>
      <section className="bg-[url(/offers/bg-ofertas-hero.png)] bg-cover bg-center text-white py-16 sm:py-24 px-4 sm:px-6 lg:px-8 text-center flex items-center justify-center relative">
        <div className="absolute w-full h-full bg-radial from-gray-700"></div>
        <div className="max-w-4xl mx-auto z-20">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
            ¡Ahorra a lo Grande!
          </h1>
          <div className="border-b-2 mb-2 border-gray-400"></div>
          <p className="text-lg sm:text-xl text-orange-100">
            Descubre nuestras ofertas exclusivas y descuentos por tiempo
            limitado.
          </p>
        </div>
      </section>

      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-emerald-700 text-center mb-6">
            Productos en Oferta
          </h2>
          <OfferList />
        </div>
      </section>

      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto bg-white rounded-lg shadow-xl p-8">
          <h2 className="text-2xl font-bold text-emerald-700 mb-6 border-b border-b-gray-300 pb-4">
            Próximas Ofertas
          </h2>
          <div className="space-y-6 text-gray-700">
            <div className="flex items-start">
              <FaCalendarAlt className="text-emerald-600 text-xl mr-4 mt-1 size-7" />
              <div>
                <h3 className="text-lg font-semibold text-gray-900">
                  Venta de Verano
                </h3>
                <p className="text-sm text-gray-600 mb-2">
                  Del 15 al 30 de Julio
                </p>
                <p>
                  Grandes descuentos en ropa de temporada, artículos para el
                  aire libre y más.
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <FaTags className="text-emerald-600 text-xl mr-4 mt-1 size-7" />
              <div>
                <h3 className="text-lg font-semibold text-gray-900">
                  Fin de Semana Tecnológico
                </h3>
                <p className="text-sm text-gray-600 mb-2">
                  Del 5 al 7 de Agosto
                </p>
                <p>Ofertas especiales en electrónica, gadgets y accesorios.</p>
              </div>
            </div>
            <div className="flex items-start">
              <FaGift className="text-emerald-600 text-xl mr-4 mt-1 size-7" />
              <div>
                <h3 className="text-lg font-semibold text-gray-900">
                  Promoción Vuelta al Cole
                </h3>
                <p className="text-sm text-gray-600 mb-2">
                  Todo el mes de Septiembre
                </p>
                <p>
                  Descuentos en material escolar, mochilas y electrónica para
                  estudiantes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
