import { create } from "zustand";
import { persist } from "zustand/middleware";

export interface ProductStorage {
  id: number;
  name: string;
  price: number;
  image: string;
  marca: string;
  color?: string;
  size?: string;
  count: number;
}

interface CarStore {
  count: number;
  price_total: number;
  productsList: ProductStorage[];
  addProduct: (product: ProductStorage) => void;
  removeProduct: (id: number) => void;
  resetAll:()=>void;
}

const initialState: CarStore = {
  count: 0,
  price_total: 0,
  productsList: [],
  addProduct: () => {},
  removeProduct: () => {},
  resetAll:()=>{},
};

export const useCarStore = create<CarStore>()(
  persist(
    (set) => ({
      ...initialState,
      addProduct: (product) => {
        set((state) => ({
          productsList: [...state.productsList, product],
          count: state.count + 1,
          price_total: state.price_total + product.price * product.count,
        }));
      },
      removeProduct: (id) => {
        set((state) => {
          const filtered = state.productsList.filter(
            (product) => product.id != id
          );
          const remove = state.productsList.find((product) => product.id == id);

          return {
            productsList: filtered,
            count: state.count - 1,
            price_total: remove && state.price_total - remove.price,
          };
        });
      },
      resetAll:()=>{set({...initialState})}
    }),
    {
      name: "car-storage",
    }
  )
);
