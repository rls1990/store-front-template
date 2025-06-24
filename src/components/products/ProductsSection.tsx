"use client";

import ProductFilter from "../ui/filter/ProductFilter";

const ProductsSection = () => {
  return (
    <div>
      <ProductFilter onChange={(filter)=>console.log(filter)}/>
    </div>
  );
};

export default ProductsSection;
