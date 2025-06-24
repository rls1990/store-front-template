"use client"
import { FC } from "react";
import ProductFilter from "../ui/filter/ProductFilter";

interface ProductsSectionProps {
  marcas: string[];
}

const ProductsSection: FC<ProductsSectionProps> = ({ marcas }) => {
  return (
    <div>
      <ProductFilter marcas={marcas} onChange={(filter) => console.log(filter)} />
    </div>
  );
};

export default ProductsSection;
