import { CategoryData, data } from "@/data/categories";
import { FC, useState } from "react";
import { BiCategory } from "react-icons/bi";

interface ProductsListProps {
  categories: CategoryData[];
}

const ProductsList: FC<ProductsListProps> = ({ categories }) => {
  const [filter_categories_index, setFilter_categories_index] = useState(1);
  const filter_buttom =
    " text-gray-700 hover:bg-gray-200 [&_svg]:text-gray-500";
  const filter_buttom_active =
    " bg-[#10b981] hover:bg-[#10b981d8] text-white font-[500]";
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="lg:grid lg:grid-cols-4 lg:gap-8 min-h-[100vh]">
        <aside className="lg:col-span-1 mb-8 lg:mb-0">
          <div className="bg-white p-6 rounded-lg shadow-md sticky top-24">
            <h3 className="text-lg font-semibold text-gray-700 mb-4 border-b border-b-gray-300 pb-2">
              Categorías
            </h3>
            <ul className="space-y-2 overflow-y-auto text-gray-700">
              <li>
                <button
                  onClick={() => setFilter_categories_index(0)}
                  className={
                    "w-full text-left px-4 py-2 rounded-md transition duration-150 cursor-pointer" +
                    `${
                      filter_categories_index === 0
                        ? filter_buttom_active
                        : filter_buttom
                    }`
                  }
                >
                  <span className="flex gap-1">
                    <BiCategory className="size-6" /> Todos
                  </span>
                </button>
              </li>
              <li>
                <button>
                  <span className="flex gap-1">Electrónica</span>
                </button>
              </li>
            </ul>
          </div>
        </aside>
        <main className="lg:col-span-3">asd</main>
      </div>
    </div>
  );
};

export default ProductsList;
