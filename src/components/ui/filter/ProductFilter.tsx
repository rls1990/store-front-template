"use client";

import { FC, useRef, useState } from "react";
import FilterIcon from "../icons/FilterIcon";
import ChevronDownIcon from "../icons/ChevronDownIcon";
import Select from "../fields/select/Select";
import ColorSelect from "../fields/color/ColorSelect";
import { PriceRange } from "../fields/range/PriceRange";
import Rating from "../fields/rating/Rating";
import FilterSearchIcon from "../icons/FilterSearchIcon";

interface FilterData {
  nombre?: string;
  fecha_publicacion?: string;
  color?: string;
  rango_precio: { min: number; max: number };
  marca: string;
  rating: number;
}

interface ProductFilterProps {
  onChange?: (data: FilterData) => void;
}

const ProductFilter: FC<ProductFilterProps> = ({ onChange }) => {
  const [openMenuFulter, setOpenMenuFulter] = useState(false);
  const filter = useRef<FilterData>({
    nombre: "",
    fecha_publicacion: "",
    color: "",
    rango_precio: { min: 0, max: 0 },
    marca: "",
    rating: 0,
  });

  return (
    <div className="bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center gap-4">
        <div className="inline-flex w-full gap-3 flex-col sm:flex-row">
          <div className="relative flex-grow w-full sm:w-auto">
            <input
              type="text"
              id="search-input"
              placeholder="Buscar por nombre..."
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition duration-150 ease-in-out placeholder:text-[15px]"
              onBlur={(e) => {
                filter.current = { ...filter.current, nombre: e.target.value };
              }}
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
                ` transition-transform ${openMenuFulter ? "rotate-0" : "-rotate-90"
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
          <h4 className="text-sm font-semibold text-gray-800 mb-3 border-b border-b-gray-300 pb-2 m-4">
            Opciones de Filtro
          </h4>
          <div className="space-y-3 m-4 grid items-center justify-center gap-7 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            <Select
              title="Fecha de Publicación"
              items={["Más Reciente", "Más Antiguo"]}
              onChange={(value) => filter.current = { ...filter.current, fecha_publicacion: value }}
            />

            <ColorSelect
              onChange={(color) => filter.current = { ...filter.current, color: color }}
              listcolors={["rojo", "azul", "verde", "blanco"]}
            />

            <PriceRange
              min={0}
              max={5000}
              step={10}
              onChange={(range) => filter.current = { ...filter.current, rango_precio: range }}
            />

            <Select
              title="Marca"
              items={["Marca A", "Marca B", "Marca C"]}
              onChange={(value) => filter.current = { ...filter.current, marca: value }}
            />

            <Rating onChange={(rating) => filter.current = { ...filter.current, rating: rating }} />
          </div>
          <button className="w-auto py-2 px-4 m-4 bg-emerald-600 text-white rounded-md text-sm font-medium hover:bg-emerald-700 transition duration-150 inline-flex items-center gap-1" onClick={() => onChange?.(filter.current)}>
            <FilterSearchIcon />
            Aplicar Filtros
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductFilter;
