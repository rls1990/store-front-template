"use client";
import { FC, useEffect, useRef, useState } from "react";
import { CategoryData } from "@/data/categories";
import FilterSearchIcon from "../ui/icons/FilterSearchIcon";
import FilterIcon from "../ui/icons/FilterIcon";
import ChevronDownIcon from "../ui/icons/ChevronDownIcon";
import Select from "../ui/fields/select/Select";
import ColorSelect from "../ui/fields/color/ColorSelect";
import { PriceRange } from "../ui/fields/range/PriceRange";
import Rating from "../ui/fields/rating/Rating";
import { BiCategoryAlt } from "react-icons/bi";
import Image from "next/image";
import { FaAngleRight, FaBoxOpen } from "react-icons/fa";
import ProductCard from "./ProductCard";
import { TbCategoryPlus } from "react-icons/tb";
import { ProductData, products } from "@/data/products";
import { FaFilterCircleXmark } from "react-icons/fa6";
import Link from "next/link";

interface ProductsSectionProps {
  marcas: string[];
  categories: CategoryData[];
}

interface FilterProps {
  nombre?: string;
  color?: string;
  rango_precio?: { min: number; max: number };
  marca?: string;
  rating?: number;
  category?: string;
  subcategory?: string;
}

const initFilter: FilterProps = {
  nombre: "",
  color: "",
  rango_precio: { min: 0, max: 5000 },
  marca: "",
  rating: 0,
  category: "",
  subcategory: "",
};

const ProductsSection: FC<ProductsSectionProps> = ({ marcas, categories }) => {
  const [openMenuFulter, setOpenMenuFulter] = useState(false);
  const filter = useRef<FilterProps>(initFilter);
  const [filter_categories_index, setFilter_categories_index] = useState(-1);
  const [filter_subcategories_index, setFilter_subcategories_index] =
    useState(-1);

  const [filteredProductsData, setFilteredProducts] =
    useState<ProductData[]>(products);

  const [visible_product, setVisibleProduct] = useState(5);
  const showMoreProducts = () => {
    setVisibleProduct((prevVisible) => prevVisible + 5);
  };

  const [keyProducts, setKeyProducts] = useState("listp" + Date.now());
  const [keyResetFilters, setResetFilters] = useState("filt" + Date.now());

  const filterProducts = (product: ProductData) => {
    if (
      filter.current.nombre &&
      !product.name.toLowerCase().includes(filter.current.nombre.toLowerCase())
    )
      return false;

    if (filter.current.rating && product.rating < filter.current.rating)
      return false;

    if (filter.current.category && product.category !== filter.current.category)
      return false;

    if (
      filter.current.subcategory &&
      product.subcategory !== filter.current.subcategory
    )
      return false;

    if (filter.current.rango_precio) {
      if (product.price < filter.current.rango_precio.min) return false;

      if (product.price > filter.current.rango_precio.max) return false;
    }

    if (filter.current.color) {
      const colorLower = filter.current.color.toLowerCase();
      const productColorsLower = product.colors.map((c) => c.toLowerCase());
      if (!productColorsLower.includes(colorLower)) return false;
    }

    if (filter.current.marca) {
      if (product.marca.toLowerCase() !== filter.current.marca.toLowerCase())
        return false;
    }

    return true;
  };

  useEffect(() => {
    const data = products.filter((val) => filterProducts(val));
    setFilteredProducts(data);
    setVisibleProduct(5);
  }, [filter.current]);

  return (
    <div>
      {/* ProductFilter */}
      <div className="bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center gap-4 pt-5">
          <div className="inline-flex w-full gap-3 flex-col sm:flex-row">
            <div className="relative flex-grow w-full sm:w-auto">
              <input
                key={keyResetFilters + "name"}
                type="text"
                id="search-input"
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    console.log(filter);
                    setKeyProducts("listp" + Date.now());
                  }
                }}
                onChange={(e) => {
                  filter.current = {
                    ...filter.current,
                    nombre: e.target.value,
                  };
                }}
                placeholder="Buscar por nombre..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition duration-150 ease-in-out placeholder:text-[15px]"
              />
              <div className="absolute left-0 top-0 bottom-0 pl-3 flex items-center pointer-events-none">
                <svg
                  className="h-5 w-5 stroke-gray-50 hover:stroke-gray-100"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            </div>
            <button
              id="filter-toggle-button"
              type="button"
              className="w-auto flex items-center justify-center px-5 py-2 border border-gray-300 rounded-full bg-white text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition duration-150 ease-in-out cursor-pointer"
              onClick={() => setOpenMenuFulter(!openMenuFulter)}
            >
              <FilterIcon className="size-5 ml-1" />
              Filtros
              <ChevronDownIcon
                className={
                  "size-5 mr-1" +
                  ` transition-transform ${
                    openMenuFulter ? "rotate-0" : "-rotate-90"
                  }`
                }
              />
            </button>
          </div>

          <div
            className={
              "w-full  border border-gray-200 bg-white shadow-xl rounded-lg transition-all duration-300 overflow-auto sm:overflow-hidden" +
              `${openMenuFulter ? " scale-100 h-100 md:h-80" : " scale-0 h-0"}`
            }
          >
            <h4 className="text-[16px] font-semibold text-gray-700 mb-3 border-b border-b-gray-300 pb-2 m-4 pl-8">
              Opciones de Filtro
            </h4>
            <div
              className="m-4 grid items-center gap-7 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 px-7 border-b border-b-gray-300 pb-5"
              key={keyResetFilters}
            >
              <Select
                title="Marca"
                items={marcas ? marcas : ["Marca A", "Marca B", "Marca C"]}
                className="w-full"
                onChange={(value) =>
                  (filter.current = { ...filter.current, marca: value })
                }
              />
              <div className="relative mx-auto">
                <ColorSelect
                  className="pl-3 sm:pl-0 w-53"
                  onChange={(color) =>
                    (filter.current = { ...filter.current, color: color })
                  }
                  listcolors={["rojo", "azul", "verde", "blanco", "negro"]}
                />
              </div>

              <PriceRange
                className="w-full px-3"
                min={0}
                max={5000}
                step={10}
                onChange={(range) =>
                  (filter.current = { ...filter.current, rango_precio: range })
                }
              />

              <Rating
                onChange={(rating) =>
                  (filter.current = { ...filter.current, rating: rating })
                }
              />
            </div>
            <div>
              <button
                className="px-3 py-2 ml-10 bg-emerald-600 text-white rounded-md text-sm font-medium hover:bg-emerald-700 transition duration-150 cursor-pointer mb-5 shadow-lg"
                onClick={() => {
                  setKeyProducts("listp" + Date.now());
                }}
              >
                <span className="flex items-center justify-center gap-1">
                  <FilterSearchIcon />
                  Aplicar Filtros
                </span>
              </button>

              <button
                className="px-3 py-2 ml-3 bg-orange-700 text-white rounded-md text-sm font-medium hover:bg-orange-800 transition duration-150 cursor-pointer mb-5 shadow-lg"
                onClick={() => {
                  filter.current = initFilter;
                  setResetFilters("filt" + Date.now());
                }}
              >
                <span className="flex items-center justify-center gap-1">
                  <FaFilterCircleXmark className="size-6" />
                  Reset Filters
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* ProductFilter */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="lg:grid lg:grid-cols-4 lg:gap-8 min-h-[100vh]">
          <aside className="lg:col-span-1 mb-8 lg:mb-0">
            <div className="bg-white shadow-md sticky top-24 h-[510px] overflow-y-auto rounded-lg">
              <h3 className="text-lg font-semibold text-white sticky top-0 left-0 right-0 p-3 shadow-md inline-flex items-center justify-center gap-2 w-full z-30 bg-gradient-to-r from-emerald-500 to-teal-600">
                <BiCategoryAlt className="size-6" />
                Categorías
              </h3>
              <ul className="space-y-2 text-gray-700 px-3 py-3">
                {categories.map((item, index) => (
                  <li key={item.nombre}>
                    <button
                      onClick={() => {
                        if (index == filter_categories_index) {
                          setFilter_categories_index(-1);
                          filter.current = {
                            ...filter.current,
                            category: "",
                            subcategory: "",
                          };
                        } else {
                          setFilter_categories_index(index);
                          setFilter_subcategories_index(-1);
                          filter.current = {
                            ...filter.current,
                            category: item.nombre,
                            subcategory: "",
                          };
                        }
                      }}
                      className={
                        "w-full text-left px-4 py-2 rounded-md transition-all duration-200 cursor-pointer hover:bg-gray-200" +
                        `${
                          filter_categories_index === index &&
                          " bg-gray-100 text-[#06744f]"
                        }`
                      }
                    >
                      <span className="flex items-center justify-start gap-2">
                        <Image
                          width={500}
                          height={500}
                          alt="image categorie"
                          className="size-14 rounded-full shadow-lg shadow-gray-300"
                          src={item.image}
                        />
                        {item.nombre}
                        <FaAngleRight
                          className={
                            "transition-transform duration-200" +
                            `${
                              filter_categories_index === index && " rotate-90"
                            }`
                          }
                        />
                      </span>
                    </button>

                    <ul
                      className={`mt-2 pl-4 border-l-2 border-l-[#d1d5db] overflow-y-hidden fade-in transition-all duration-300${
                        filter_categories_index == index ? " h-60" : " h-0"
                      }`}
                    >
                      {item.subcategories.map((subc, index1) => (
                        <li key={"subc" + index1}>
                          <button
                            onClick={() => {
                              setFilter_subcategories_index(index1);
                              filter.current = {
                                ...filter.current,
                                subcategory: subc,
                              };
                            }}
                            className={
                              "w-full text-left px-2 py-1 rounded-md text-gray-600 hover:bg-gray-200 transition duration-150 pl-2 pr-2 pt-1 pb-1 text-sm cursor-pointer" +
                              `${
                                index1 == filter_subcategories_index &&
                                " bg-gray-200"
                              }`
                            }
                          >
                            {subc}
                          </button>
                        </li>
                      ))}
                    </ul>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
          <main key={keyProducts} className="lg:col-span-3">
            <h2 className="text-2xl lg:text-3xl font-bold text-emerald-700 text-center mb-12">
              Nuestros Productos
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-7 relative min-h-dvh">
              {filteredProductsData.length > 0 ? (
                filteredProductsData
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
                      Lo sentimos, no hay productos disponibles en este momento.
                      Por favor, intenta nuevamente más tarde.
                    </p>
                  </div>
                </div>
              )}
            </div>
            {visible_product < filteredProductsData.length && (
              <button
                className="flex items-center justify-center gap-2 bg-gradient-to-r from-emerald-500 via-emerald-700 to-emerald-900 text-white font-semibold py-3 px-6 rounded-full shadow-xl transition duration-500 transform hover:scale-110 hover:brightness-110 focus:outline-none focus:ring-3 focus:ring-emerald-300 mt-10 cursor-pointer"
                onClick={showMoreProducts}
              >
                Mostrar más
                <TbCategoryPlus size={24} className="animate-pulse" />
              </button>
            )}

            <h2 className="text-2xl lg:text-3xl font-bold text-emerald-700 text-center mb-12 mt-12">
              Ofertas Especiales
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-7 relative">
              {products
                .filter((data) => data.isOffer)
                .slice(0, 3)
                .map((data) => (
                  <ProductCard key={data.id + "product"} data={data} />
                ))}
            </div>
            {products.filter((data) => data.isOffer).length > 3 && (
              <Link
                className="flex items-center justify-center gap-2 bg-gradient-to-r from-emerald-500 via-emerald-700 to-emerald-900 text-white font-semibold py-3 px-6 rounded-full shadow-xl transition duration-500 transform hover:scale-110 hover:brightness-110 focus:outline-none focus:ring-3 focus:ring-emerald-300 mt-10 cursor-pointer w-60"
                href="/offers"
              >
                Mostrar más ofertas
                <TbCategoryPlus size={24} className="animate-pulse" />
              </Link>
            )}
          </main>
        </div>
      </div>
    </div>
  );
};

export default ProductsSection;
