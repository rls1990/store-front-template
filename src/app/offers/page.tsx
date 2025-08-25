import { OfferList } from "@/components/offers/OfferList";

export default function OffersPage() {
  return (
    <>
      <section className="bg-[url(/offers/bg-ofertas-hero1.png)] bg-cover bg-center text-white py-16 sm:py-24 px-4 sm:px-6 lg:px-8 text-center flex items-center justify-center relative">
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
    </>
  );
}
