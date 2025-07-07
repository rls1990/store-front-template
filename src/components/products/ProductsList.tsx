const ProductsList = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="lg:grid lg:grid-cols-4 lg:gap-8 min-h-[100vh]">
        <aside className="lg:col-span-1 mb-8 lg:mb-0">
          <div className="bg-white p-6 rounded-lg shadow-md sticky top-24">
            <h3 className="text-lg font-semibold text-gray-700 mb-4 border-b border-b-gray-300 pb-2">
              Categorías
            </h3>
            <ul className="space-y-2 overflow-y-auto">
              <li>
                <button
                  className="filter-button w-full text-left px-4 py-2 rounded-md text-gray-700 hover:bg-gray-200 transition duration-150 filter-active"
                  data-category="all"
                >
                  Todos
                </button>
              </li>
              <li>
                <button
                  className="filter-button category-toggle w-full text-left px-4 py-2 rounded-md text-gray-700 hover:bg-gray-200 transition duration-150"
                  data-category="electronicos"
                >
                  Electrónicos
                  <i className="fas fa-chevron-down ml-2 text-xs text-gray-500 transform transition-transform duration-200"></i>
                </button>
                <ul className="subcategory-list hidden">
                  <li>
                    <button
                      className="filter-button w-full text-left px-2 py-1 rounded-md text-gray-600 hover:bg-gray-200 transition duration-150"
                      data-category="electronicos-audio"
                    >
                      Audio
                    </button>
                  </li>
                  <li>
                    <button
                      className="filter-button w-full text-left px-2 py-1 rounded-md text-gray-600 hover:bg-gray-200 transition duration-150"
                      data-category="electronicos-smartphones"
                    >
                      Smartphones
                    </button>
                  </li>
                  <li>
                    <button
                      className="filter-button w-full text-left px-2 py-1 rounded-md text-gray-600 hover:bg-gray-200 transition duration-150"
                      data-category="electronicos-wearables"
                    >
                      Wearables
                    </button>
                  </li>
                </ul>
              </li>
              <li>
                <button
                  className="filter-button category-toggle w-full text-left px-4 py-2 rounded-md text-gray-700 hover:bg-gray-200 transition duration-150"
                  data-category="ropa"
                >
                  Ropa
                  <i className="fas fa-chevron-down ml-2 text-xs text-gray-500 transform transition-transform duration-200"></i>
                </button>
                <ul className="subcategory-list hidden">
                  <li>
                    <button
                      className="filter-button w-full text-left px-2 py-1 rounded-md text-gray-600 hover:bg-gray-200 transition duration-150"
                      data-category="ropa-hombre"
                    >
                      Hombre
                    </button>
                  </li>
                  <li>
                    <button
                      className="filter-button w-full text-left px-2 py-1 rounded-md text-gray-600 hover:bg-gray-200 transition duration-150"
                      data-category="ropa-mujer"
                    >
                      Mujer
                    </button>
                  </li>
                  <li>
                    <button
                      className="filter-button w-full text-left px-2 py-1 rounded-md text-gray-600 hover:bg-gray-200 transition duration-150"
                      data-category="ropa-ninos"
                    >
                      Niños
                    </button>
                  </li>
                </ul>
              </li>
              <li>
                <button
                  className="filter-button category-toggle w-full text-left px-4 py-2 rounded-md text-gray-700 hover:bg-gray-200 transition duration-150"
                  data-category="hogar"
                >
                  Hogar
                  <i className="fas fa-chevron-down ml-2 text-xs text-gray-500 transform transition-transform duration-200"></i>
                </button>
                <ul className="subcategory-list hidden">
                  <li>
                    <button
                      className="filter-button w-full text-left px-2 py-1 rounded-md text-gray-600 hover:bg-gray-200 transition duration-150"
                      data-category="hogar-decoracion"
                    >
                      Decoración
                    </button>
                  </li>
                  <li>
                    <button
                      className="filter-button w-full text-left px-2 py-1 rounded-md text-gray-600 hover:bg-gray-200 transition duration-150"
                      data-category="hogar-cocina"
                    >
                      Cocina
                    </button>
                  </li>
                  <li>
                    <button
                      className="filter-button w-full text-left px-2 py-1 rounded-md text-gray-600 hover:bg-gray-200 transition duration-150"
                      data-category="hogar-textiles"
                    >
                      Textiles
                    </button>
                  </li>
                </ul>
              </li>
              <li>
                <button
                  className="filter-button category-toggle w-full text-left px-4 py-2 rounded-md text-gray-700 hover:bg-gray-200 transition duration-150"
                  data-category="juguetes"
                >
                  Juguetes
                  <i className="fas fa-chevron-down ml-2 text-xs text-gray-500 transform transition-transform duration-200"></i>
                </button>
                <ul className="subcategory-list hidden">
                  <li>
                    <button
                      className="filter-button w-full text-left px-2 py-1 rounded-md text-gray-600 hover:bg-gray-200 transition duration-150"
                      data-category="juguetes-educativos"
                    >
                      Educativos
                    </button>
                  </li>
                  <li>
                    <button
                      className="filter-button w-full text-left px-2 py-1 rounded-md text-gray-600 hover:bg-gray-200 transition duration-150"
                      data-category="juguetes-airelibre"
                    >
                      Aire Libre
                    </button>
                  </li>
                </ul>
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
