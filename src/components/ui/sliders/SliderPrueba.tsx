"use client";

import Image from "next/image";
import React, { FC, useState } from "react";

interface SliderPruebaProps {
  images: React.ReactNode[];
}

const SliderPrueba: FC<SliderPruebaProps> = ({ images }) => {
  const [count, setCount] = useState(0);

  return (
    <div>
      {images[count]}
      <button
        onClick={() => setCount((prev) => (prev == 1 ? 0 : 1))}
        className="ml-10 p-2 bg-accent px-3"
      >
        {count}
      </button>
    </div>
  );
};

export default SliderPrueba;
