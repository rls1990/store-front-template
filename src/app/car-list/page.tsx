"use client";

"use client";
import { useCarStore } from "@/store/useCarStore";
import { IoIosSend } from "react-icons/io";
import { FaTrash } from "react-icons/fa";
import { FaShopSlash } from "react-icons/fa6";
import Image from "next/image";

export default function CarListPage() {
  const { productsList, price_total, removeProduct } = useCarStore();

  const handleRemoveProduct = (id: number) => {
    removeProduct(id);
  };

  const calculateTotalPerItem = (price: number, count: number) => {
    return price * count;
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-7xl">
      <h1 className="text-4xl font-bold text-center text-gray-700 mb-10">
        Tu carrito de compras
      </h1>

      {productsList.length === 0 ? (
        <div className="text-center text-gray-500 text-xl mt-20">
          <p>Tu carrito está vacío. ¡Empieza a llenarlo!</p>
          <p className="mt-4">
            <span className="flex items-center justify-center"><FaShopSlash className="size-20 text-emerald-700" /></span>
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Columna de productos */}
          <div className="md:col-span-2 space-y-6">
            {productsList.map((product) => (
              <div
                key={product.id}
                className="flex flex-col md:flex-row items-center bg-white rounded-lg shadow-lg p-4 sm:p-6 transition-transform transform hover:scale-[1.01]"
              >
                <div className="flex-shrink-0 w-24 h-24 sm:w-32 sm:h-32 rounded-md overflow-hidden">
                  <Image
                    src={product.image}
                    width={500}
                    height={500}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-grow md:ml-6 mt-4 md:mt-0 text-center md:text-left">
                  <h2 className="text-xl sm:text-2xl font-semibold text-gray-700">
                    {product.name}
                  </h2>
                  <p className="text-gray-600 mt-1">
                    <span className="font-medium">Marca:</span> {product.marca}
                  </p>
                  {product.color && (
                    <p className="text-gray-600">
                      <span className="font-medium">Color:</span> {product.color}
                    </p>
                  )}
                  {product.size && (
                    <p className="text-gray-600">
                      <span className="font-medium">Talla:</span> {product.size}
                    </p>
                  )}
                  <div className="flex items-center justify-center md:justify-start mt-2">
                    <p className="text-xl font-bold text-emerald-700 mr-2">
                      ${product.price}
                    </p>
                    <span className="text-gray-500">x {product.count}</span>
                  </div>
                </div>
                <div className="flex items-center mt-4 md:mt-0 md:ml-auto">
                  <p className="text-xl font-bold text-gray-700 mr-4">
                    Total: ${calculateTotalPerItem(product.price, product.count)}
                  </p>
                  <button
                    onClick={() => handleRemoveProduct(product.id)}
                    className="text-red-500 hover:text-red-700 transition-colors p-2"
                    aria-label="Eliminar producto"
                  >
                    <FaTrash className="w-6 h-6" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Columna de resumen del carrito */}
          <div className="md:col-span-1 bg-white rounded-lg shadow-lg p-6 sticky top-23 h-[350px]">
            <h2 className="text-2xl font-bold text-gray-700 mb-6 border-b border-b-gray-300 pb-4">
              Resumen de compra
            </h2>
            <div className="flex justify-between items-center text-lg text-gray-700 mb-4">
              <span>Subtotal:</span>
              <span className="font-semibold">${price_total}</span>
            </div>
            <div className="flex justify-between items-center text-lg text-gray-700 mb-4">
              <span>Envío estimado:</span>
              <span className="font-semibold">Gratis</span>
            </div>
            <div className="flex justify-between items-center text-2xl font-bold text-gray-900 mt-6 pt-4 border-t border-gray-300">
              <span>Total final:</span>
              <span>${price_total}</span>
            </div>
            <button className="w-full mt-8 py-3 bg-emerald-700 text-white rounded-lg font-semibold hover:bg-emerald-600 transition-colors shadow-md inline-flex items-center justify-center gap-2 cursor-pointer">
              <IoIosSend className="size-7" />
              Proceder al pago
            </button>
          </div>
        </div>
      )}
    </div>
  );
}