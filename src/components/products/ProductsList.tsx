import { CategoryData, data } from "@/data/categories";
import Image from "next/image";
import { FC, useState } from "react";
import { BiCategory, BiCategoryAlt } from "react-icons/bi";
import { FaAngleRight } from "react-icons/fa";

interface ProductsListProps {
  categories: CategoryData[];
}

const ProductsList: FC<ProductsListProps> = ({ categories }) => {
  const [filter_categories_index, setFilter_categories_index] = useState(0);
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
                      setFilter_categories_index(index + 1);

                      if (index + 1 == filter_categories_index)
                        setFilter_categories_index(0);
                    }}
                    className={
                      "w-full text-left px-4 py-2 rounded-md transition-all duration-200 cursor-pointer hover:bg-gray-200" +
                      `${
                        filter_categories_index === index + 1 &&
                        " bg-gray-100 text-[#06744f]"
                      }`
                    }
                  >
                    <span className="flex items-center justify-start gap-2">
                      <Image
                        width={500}
                        height={500}
                        alt="image categorie"
                        className="size-16 rounded-full shadow-lg shadow-gray-300"
                        src={item.image}
                      />
                      {item.nombre}
                      <FaAngleRight
                        className={
                          "transition-transform duration-200" +
                          `${
                            filter_categories_index === index + 1 &&
                            " rotate-90"
                          }`
                        }
                      />
                    </span>
                  </button>

                  <ul
                    key={Date.now()}
                    className={
                      "mt-2 pl-4 border-l-2 border-l-[#d1d5db] overflow-y-hidden fade-in" +
                      `${
                        filter_categories_index == index + 1
                          ? " h-auto"
                          : " h-0"
                      }`
                    }
                  >
                    {item.subcategories.map((subc, index) => (
                      <li key={"subc" + index}>
                        <button
                          className={
                            "w-full text-left px-2 py-1 rounded-md text-gray-600 hover:bg-gray-200 transition duration-150 pl-2 pr-2 pt-1 pb-1 text-sm cursor-pointer"
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
        <main className="lg:col-span-3">asd</main>
      </div>
    </div>
  );
};

export default ProductsList;
