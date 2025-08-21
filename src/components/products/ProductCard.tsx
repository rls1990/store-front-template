import { BiSolidOffer } from "react-icons/bi";
import { FaTags } from "react-icons/fa";
import Rating from "../ui/fields/rating/Rating";
import { FC } from "react";
import Image from "next/image";
import { ProductData } from "@/data/products";

interface ProductCardProps {
  data: ProductData;
}

const ProductCard: FC<ProductCardProps> = ({ data }) => {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl flex flex-col transition-all duration-300 hover:scale-107 fade-in">
      <div className="relative overflow-hidden">
        <Image
          className="w-full h-56 object-cover transition-transform duration-300 ease-in-out hover:scale-112 hover:rotate-3"
          width={500}
          height={500}
          src={data.image}
          alt="[Imagen de Auriculares Inalámbricos]"
        />
        <div className="absolute top-2 right-2 inline-flex gap-2">
          {data.isNew && (
            <span className="backdrop-blur-sm bg-emerald-500/30 text-white text-xs font-semibold px-2 py-1 rounded-full inline-flex items-center gap-2">
              <FaTags className="size-5" />
              New
            </span>
          )}

          {data.isOffer && (
            <span className="backdrop-blur-sm bg-emerald-500/30 text-white text-xs font-semibold px-2 py-1 rounded-full inline-flex items-center gap-2">
              <BiSolidOffer className="size-5" />
              Offer
            </span>
          )}
        </div>
      </div>
      <div className="p-5 flex flex-col flex-grow">
        <span className="text-xs font-semibold text-gray-500 tracking-wide uppercase">
          {data.category} / {data.subcategory}
        </span>

        <h3 className="product-name text-lg font-semibold text-gray-900 mt-1 mb-2 truncate">
          {data.name}
        </h3>
        <div className="flex items-center mb-3">
          <Rating initialRating={data.rating} readonly label="" />

          <span className="ml-2 text-sm text-gray-600">
            {data.rating} | {data.number_comments}
          </span>
        </div>
        <p className="text-gray-700 text-sm mb-4 flex-grow">
          {data.description}
        </p>

        <div className="flex items-center justify-start mb-4">
          {data.isOffer ? (
            <div>
              <span className="text-gray-700 text-xl font-medium">
                ${data.priceOffer}
              </span>
              <span className="border-l-2 h-4 ml-2 border-l-gray-500"></span>
              <span className="text-gray-500 line-through ml-2 text-lg">
                ${data.price}
              </span>
            </div>
          ) : (
            <div>
              <span className="text-gray-700 text-xl font-medium">
                ${data.price}
              </span>
            </div>
          )}
        </div>

        <a
          href="#"
          className="mt-auto block w-full bg-emerald-600 hover:bg-emerald-700 text-white text-center font-semibold py-2 px-4 rounded-lg transition duration-150"
        >
          Ver Detalles
        </a>
      </div>
    </div>
  );
};

export default ProductCard;
