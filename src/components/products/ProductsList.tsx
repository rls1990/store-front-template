"use client";
import { CategoryData } from "@/data/categories";
import Image from "next/image";
import { FC, useEffect, useState } from "react";
import { BiCategoryAlt } from "react-icons/bi";
import { FaAngleRight } from "react-icons/fa";

interface ProductsListProps {
  categories: CategoryData[];
  onChange?: (data: FilterValueData) => void;
}

interface FilterValueData {
  category?: string;
  subcategory?: string;
}

const ProductsList: FC<ProductsListProps> = ({ categories, onChange }) => {
  const [filter_categories_index, setFilter_categories_index] = useState(-1);
  const [filter_subcategories_index, setFilter_subcategories_index] =
    useState(-1);
  const [filterValue, setFilterValue] = useState<FilterValueData>({});

  useEffect(() => {
    onChange?.(filterValue);
  }, [filterValue]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="lg:grid lg:grid-cols-4 lg:gap-8 min-h-[100vh]">
        <aside className="lg:col-span-1 mb-8 lg:mb-0">
          <div className="bg-white shadow-md sticky top-24 h-[400px] overflow-y-auto rounded-lg">
            <h3 className="text-lg font-semibold text-gray-500 backdrop-blur-lg sticky top-0 left-0 right-0 p-3 shadow-md inline-flex w-full items-center justify-center z-10">
              <BiCategoryAlt className="size-6" />
              Categorías
            </h3>
            <ul className="space-y-2 overflow-y-auto text-gray-700 px-3 py-3">
              {categories.map((item, index) => (
                <li key={item.nombre}>
                  <button
                    onClick={() => {
                      if (index == filter_categories_index) {
                        setFilter_categories_index(-1);
                        setFilterValue({});
                      } else {
                        setFilter_categories_index(index);
                        setFilterValue({
                          ...filterValue,
                          category: item.nombre,
                          subcategory: undefined,
                        });
                        setFilter_subcategories_index(-1);
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
                          `${filter_categories_index === index && " rotate-90"}`
                        }
                      />
                    </span>
                  </button>

                  <ul
                    className={
                      "mt-2 pl-4 border-l-2 border-l-[#d1d5db] overflow-y-hidden fade-in" +
                      `${filter_categories_index == index ? " h-auto" : " h-0"}`
                    }
                  >
                    {item.subcategories.map((subc, index1) => (
                      <li key={"subc" + index1}>
                        <button
                          onClick={() => {
                            setFilter_subcategories_index(index1);
                            setFilterValue({
                              ...filterValue,
                              subcategory: subc,
                            });
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
        <main className="lg:col-span-3">asda</main>
      </div>
    </div>
  );
};

export default ProductsList;
