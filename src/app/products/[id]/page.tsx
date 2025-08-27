"use client";

import ProductCard from "@/components/products/ProductCard";
import ColorSelect from "@/components/ui/fields/color/ColorSelect";
import Rating from "@/components/ui/fields/rating/Rating";
import { SizeSelect } from "@/components/ui/fields/size/SizeSelect";
import { products } from "@/data/products";
import { useCarStore } from "@/store/useCarStore";
import Image from "next/image";
import { useParams } from "next/navigation";
import { useState } from "react";
import { CiCircleMinus, CiCirclePlus } from "react-icons/ci";
import { FaHeart, FaRegTrashAlt, FaShoppingCart } from "react-icons/fa";
import { ProductStorage } from "../../../store/useCarStore";

export default function ProductPage() {
  const { id } = useParams<{ id: string }>();
  const product = products[Number.parseInt(id) - 1];
  const [cantidad, setCantidad] = useState(1);
  const [color, setColor] = useState<string | undefined>(undefined);
  const [sizeSelect, setSizeSelect] = useState<string | undefined>(undefined);

  const { addProduct } = useCarStore();

  return (
    <>
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto bg-white rounded-lg shadow-xl overflow-hidden md:grid md:grid-cols-2 md:gap-8">
          <div className="flex justify-center items-center p-8 bg-gray-50">
            <Image
              width={500}
              height={500}
              className="w-auto max-w-full max-h-96 object-contain rounded-lg shadow-md"
              src={product.image}
              alt="[Imagen principal del producto]"
            />
          </div>

          <div className="p-8">
            <span className="text-sm font-semibold text-gray-500 uppercase tracking-wide">
              {product.category}
            </span>
            <h1 className="text-3xl font-bold text-gray-800 mt-2 mb-4 border-b border-b-gray-300 pb-2">
              {product.name}
            </h1>

            <div className="inline-flex items-center gap-2 mb-4">
              <Rating readonly initialRating={product.rating} label="" />
              <p className="text-gray-500">
                ({product.number_comments} reseñas)
              </p>
            </div>

            <div className="text-2xl font-bold text-emerald-600 mb-6">
              {product.isOffer ? (
                <div>
                  ${product.priceOffer}{" "}
                  <span className="border-l-2 h-4 ml-2 border-l-gray-500"></span>{" "}
                  <span className="text-gray-500 line-through ml-2 font-normal">
                    ${product.price}
                  </span>
                </div>
              ) : (
                <div>${product.price}</div>
              )}
            </div>

            <p className="text-gray-700 mb-6">{product.description}</p>

            <div className="mb-6">
              <ColorSelect
                listcolors={product.colors}
                onChange={(color) => {
                  setColor(color);
                }}
              />
            </div>

            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Tamaño:
              </label>
              <SizeSelect
                size={product.size}
                onChange={(value) => {
                  setSizeSelect(value);
                }}
              />
            </div>

            <div className="flex items-center space-x-4 mb-6 border-b border-b-gray-300 pb-4">
              <label
                htmlFor="quantity"
                className="text-sm font-medium text-gray-700"
              >
                Cantidad:
              </label>
              <input
                id="quantity"
                name="quantity"
                min="1"
                type="number"
                onChange={(e) =>
                  e.target.value && setCantidad(Number.parseInt(e.target.value))
                }
                value={cantidad}
                className="w-20 border border-gray-300 rounded-md text-center text-sm py-1 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
              />
              <div className="inline-flex items-center justify-center gap-2">
                <button
                  className="bg-emerald-600 rounded-full text-gray-100 flex items-center justify-center shadow-md shadow-gray-500 cursor-pointer transition-transform hover:scale-112 hover:shadow-lg active:scale-97 active:shadow-sm"
                  onClick={() => setCantidad(cantidad + 1)}
                >
                  <CiCirclePlus className="size-10" />
                </button>

                <button
                  className="bg-emerald-600 rounded-full text-gray-100 flex items-center justify-center shadow-md shadow-gray-500 cursor-pointer transition-transform hover:scale-112 hover:shadow-lg active:scale-97 active:shadow-sm"
                  onClick={() => cantidad > 1 && setCantidad(cantidad - 1)}
                >
                  <CiCircleMinus className="size-10" />
                </button>

                <button
                  className={`bg-red-500 rounded-full cursor-pointer p-3 transition-transform shadow-md shadow-gray-500 hover:scale-112 hover:shadow-lg active:scale-97 active:shadow-sm ${
                    cantidad > 1 ? "opacity-100" : "opacity-0"
                  }`}
                  onClick={() => setCantidad(1)}
                >
                  <FaRegTrashAlt className="text-white" />
                </button>
              </div>
            </div>

            <button
              className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-3 px-6 rounded-lg transition duration-150 flex items-center justify-center cursor-pointer"
              onClick={() => {
                const newProduct: ProductStorage = {
                  id: Date.now(),
                  color: color,
                  count: cantidad,
                  size: sizeSelect,
                  image: product.image,
                  marca: product.marca,
                  name: product.name,
                  price:
                    product.isOffer && product.priceOffer
                      ? product.priceOffer
                      : product.price,
                };
                addProduct(newProduct);
                console.log(newProduct);
              }}
            >
              <FaShoppingCart className="mr-2 size-5" /> Añadir al Carrito
            </button>

            <button className="mt-4 w-full border border-gray-300 text-gray-700 hover:bg-gray-100 font-semibold py-3 px-6 rounded-lg transition duration-150 flex items-center justify-center cursor-pointer">
              <FaHeart className="mr-2 size-5 text-emerald-700" /> Añadir a
              Lista de Deseos
            </button>
          </div>
        </div>
      </section>

      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto bg-white rounded-lg shadow-xl p-8">
          <div className="border-b border-gray-200">
            <div className="-mb-px flex space-x-8" aria-label="Tabs">
              <button className="whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm border-emerald-500 text-emerald-600 cursor-pointer">
                Descripción
              </button>
              {/* <button className="whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 cursor-pointer">
                Especificaciones Técnicas
              </button> */}
              {/* <button className="whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 cursor-pointer">
                Opiniones (120)
              </button> */}
            </div>
          </div>
          <div className="mt-8 text-gray-700">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Descripción Detallada
            </h3>
            <p>{product.descripcion_detallada}</p>
          </div>
        </div>
      </section>

      <section className="py-8 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Productos Relacionados
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {products
              .filter(
                (val) =>
                  val.category == product.category &&
                  val.subcategory == product.subcategory
              )
              .map((val, index) => (
                <ProductCard key={"productrel" + index} data={{ ...val }} />
              ))}
          </div>
        </div>
      </section>
    </>
  );
}
