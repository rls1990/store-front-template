"use client";
import { FC, useRef, useState } from "react";
import ProductFilter, { FilterData } from "../ui/filter/ProductFilter";
import ProductsList from "./ProductsList";
import { CategoryData } from "@/data/categories";

interface ProductsSectionProps {
  marcas: string[];
  categories: CategoryData[];
}

interface FilterProps extends FilterData{

}

const ProductsSection: FC<ProductsSectionProps> = ({ marcas, categories }) => {
  const filter = useRef<FilterProps | null>(null)
  return (
    <div>
      <ProductFilter
        marcas={marcas}
        onChange={(filter) => console.log(filter)}
      />
      <ProductsList
        categories={categories}
        onChange={(filter) => console.log(filter)}
      />
    </div>
  );
};

export default ProductsSection;
