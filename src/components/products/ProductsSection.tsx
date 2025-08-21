"use client";
import { FC, useRef } from "react";
import ProductFilter from "../ui/filter/ProductFilter";
import ProductsList from "./ProductsList";
import { CategoryData } from "@/data/categories";

interface ProductsSectionProps {
  marcas: string[];
  categories: CategoryData[];
}

interface FilterProps {
  nombre?: string;
  fecha_publicacion?: string;
  color?: string;
  rango_precio: { min: number; max: number };
  marca: string;
  rating: number;
  category?: string;
  subcategory?: string;
}

const ProductsSection: FC<ProductsSectionProps> = ({ marcas, categories }) => {
  const filterR = useRef<FilterProps | null>(null)
  return (
    <div>
      <ProductFilter
        marcas={marcas}
        onChange={(filter) => { console.log(filter); filterR.current = { ...filter } }}
      />
      <ProductsList
        categories={categories}
        onChange={(filter) => { console.log(filter) }}
      />
    </div>
  );
};

export default ProductsSection;
