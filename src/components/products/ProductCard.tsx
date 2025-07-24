import { BiSolidOffer } from "react-icons/bi";
import { FaTags } from "react-icons/fa";
import Rating from "../ui/fields/rating/Rating";
import { FC } from "react";

interface ProductCardProps {
  data: {
    name: string;
    rating: number;
    number_comments: number;
    description: string;
    category: string;
    subcategory: string;
    price: number;
    url: string;
    image?: string;
    isNew?: boolean;
    isOffer?: boolean;
  };
}

const ProductCard: FC<ProductCardProps> = ({ data }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
      <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform duration-300 ease-in-out hover:scale-105 flex flex-col">
        <div className="relative">
          <img
            className="w-full h-56 object-cover"
            src="https://placehold.co/600x400/34D399/FFFFFF?text=Producto+1"
            alt="[Imagen de Auriculares Inalámbricos]"
          />
          <div className="absolute top-2 right-2 inline-flex gap-2">
            <span className="bg-emerald-500 text-white text-xs font-semibold px-2 py-1 rounded-full inline-flex items-center gap-2">
              <FaTags className="size-5" />
              New
            </span>
            <span className="bg-emerald-500 text-white text-xs font-semibold px-2 py-1 rounded-full inline-flex items-center gap-2">
              <BiSolidOffer className="size-5" />
              Offer
            </span>
          </div>
        </div>
        <div className="p-5 flex flex-col flex-grow">
          <span className="text-xs font-semibold text-gray-500 uppercase tracking-wide">
            Electrónicos
          </span>
          <h3 className="product-name text-lg font-semibold text-gray-900 mt-1 mb-2 truncate">
            Auriculares Inalámbricos Pro
          </h3>
          <div className="flex items-center mb-3">
            <Rating initialRating={4.2} readonly label="" />
            <span className="ml-2 text-sm text-gray-600">(120 reseñas)</span>
          </div>
          <p className="text-gray-700 text-sm mb-4 flex-grow">
            Sonido de alta fidelidad, cancelación de ruido y batería de larga
            duración.
          </p>
          <a
            href="#"
            className="mt-auto block w-full bg-emerald-600 hover:bg-emerald-700 text-white text-center font-semibold py-2 px-4 rounded-lg transition duration-150"
          >
            Ver Detalles
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
