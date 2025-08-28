import { OfferList } from "@/components/offers/OfferList";
import { FaCalendarAlt, FaGift, FaTags } from "react-icons/fa";

export default function OffersPage() {
  return (
    <>
      <section className="bg-[url(/offers/bg-ofertas-hero.png)] bg-cover bg-center text-white py-16 sm:py-24 px-4 sm:px-6 lg:px-8 text-center flex items-center justify-center relative">
        <div className="absolute w-full h-full bg-radial from-gray-700"></div>
        <div className="max-w-4xl mx-auto z-20">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
            Salvar grande!
          </h1>
          <div className="border-b-2 mb-2 border-gray-400"></div>
          <p className="text-lg sm:text-xl text-orange-100">
            Descubra nossas ofertas exclusivas e descontos de tempo limitado.
          </p>
        </div>
      </section>

      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-emerald-700 text-center mb-6">
            Produtos em oferta
          </h2>
          <OfferList />
        </div>
      </section>

      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto bg-white rounded-lg shadow-xl p-8">
          <h2 className="text-2xl font-bold text-emerald-700 mb-6 border-b border-b-gray-300 pb-4">
            Próximas ofertas
          </h2>
          <div className="space-y-6 text-gray-700">
            <div className="flex items-start">
              <FaCalendarAlt className="text-emerald-600 text-xl mr-4 mt-1 size-7" />
              <div>
                <h3 className="text-lg font-semibold text-gray-900">
                  Venda de verão
                </h3>
                <p className="text-sm text-gray-600 mb-2">
                  Del 15 al 30 de Julio
                </p>
                <p>
                  Ótimos descontos em roupas sazonais, artigos para ar livre e muito mais.
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <FaTags className="text-emerald-600 text-xl mr-4 mt-1 size-7" />
              <div>
                <h3 className="text-lg font-semibold text-gray-900">
                  Fim de semana tecnológico
                </h3>
                <p className="text-sm text-gray-600 mb-2">
                  De 5 a 7 de agosto
                </p>
                <p>Ofertas especiais em eletrônicos, aparelhos e acessórios.</p>
              </div>
            </div>
            <div className="flex items-start">
              <FaGift className="text-emerald-600 text-xl mr-4 mt-1 size-7" />
              <div>
                <h3 className="text-lg font-semibold text-gray-900">
                  Promoção de retorno de Cole
                </h3>
                <p className="text-sm text-gray-600 mb-2">
                  Durante todo o mês de setembro
                </p>
                <p>
                  Descontos em material escolar, mochilas e eletrônicos para alunos.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
