"use client";
import { FC } from "react";
import ProductFilter from "../ui/filter/ProductFilter";
import ProductsList from "./ProductsList";
import { CategoryData } from "@/data/categories";

interface ProductsSectionProps {
  marcas: string[];
  categories: CategoryData[];
}

const ProductsSection: FC<ProductsSectionProps> = ({ marcas, categories }) => {
  return (
    <div>
      <ProductFilter
        marcas={marcas}
        onChange={(filter) => console.log(filter)}
      />
      <ProductsList categories={categories} />
    </div>
  );
};

export default ProductsSection;
