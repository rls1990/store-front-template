"use client";

import { products } from "@/data/products";
import ProductCard from "../products/ProductCard";
import { useState } from "react";
import { FaBoxOpen } from "react-icons/fa";
import { TbCategoryPlus } from "react-icons/tb";

export const OfferList = () => {
  const [visible_product, setVisibleProduct] = useState(3);
  const showMoreProducts = () => {
    setVisibleProduct((prevVisible) => prevVisible + 5);
  };
  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.filter((data) => data.isOffer).length > 0 ? (
          products
            .filter((data) => data.isOffer)
            .slice(0, visible_product)
            .map((data) => (
              <ProductCard key={data.id + "product"} data={data} />
            ))
        ) : (
          <div className="text-center text-gray-500 mt-8 absolute top-0 left-1/5 fade-in">
            <div className="flex flex-col items-center justify-center bg-gray-50 p-6">
              <FaBoxOpen className="text-gray-400 text-9xl mb-6" />
              <h2 className="text-3xl font-semibold text-gray-700 mb-2">
                No se encontraron productos
              </h2>
              <p className="text-gray-500 max-w-md text-center">
                Lo sentimos, no hay productos disponibles en este momento. Por
                favor, intenta nuevamente más tarde.
              </p>
            </div>
          </div>
        )}
      </div>
      {visible_product < products.filter((data) => data.isOffer).length && (
        <button
          className="flex items-center justify-center gap-2 bg-gradient-to-r from-emerald-500 via-emerald-700 to-emerald-900 text-white font-semibold py-3 px-6 rounded-full shadow-xl transition duration-500 transform hover:scale-110 hover:brightness-110 focus:outline-none focus:ring-3 focus:ring-emerald-300 mt-10 cursor-pointer"
          onClick={showMoreProducts}
        >
          Mostrar más
          <TbCategoryPlus size={24} className="animate-pulse" />
        </button>
      )}
    </div>
  );
};
