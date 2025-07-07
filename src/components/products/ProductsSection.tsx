"use client";
import { FC } from "react";
import ProductFilter from "../ui/filter/ProductFilter";
import ProductsList from "./ProductsList";

interface ProductsSectionProps {
  marcas: string[];
}

const ProductsSection: FC<ProductsSectionProps> = ({ marcas }) => {
  return (
    <div>
      <ProductFilter
        marcas={marcas}
        onChange={(filter) => console.log(filter)}
      />
      <ProductsList />
    </div>
  );
};

export default ProductsSection;
