"use client";

import { ItemSlider } from "@/services/get-news";
import Image from "next/image";
import { ReactNode, useEffect, useRef, useState } from "react";

interface TextSliderProps {
  items: ItemSlider[];
  interval?: number;
  className?: string;
}

const TextSlider: React.FC<TextSliderProps> = ({
  items,
  interval = 3000,
  className = "",
}) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isAnimating, setIsAnimating] = useState<boolean>(false);
  const [direction, setDirection] = useState<"left" | "right">("left");
  const images = useRef<ReactNode[] | null>(null);

  useEffect(() => {
    let imgs: ReactNode[] = [];
    items.forEach((item) => {
      imgs.push(
        <Image
          width={20}
          height={20}
          className="w-[20px] h-[20px] text-white"
          alt="image new"
          src={item.icon}
          priority={currentIndex === 0}
        />
      );
    });

    images.current = imgs;
  }, [items]);

  useEffect(() => {
    if (items.length <= 1) return;

    const timer = setInterval(() => {
      // Iniciar animación de salida
      setIsAnimating(true);
      setDirection("left");

      // Después de la animación, cambiar al siguiente texto
      setTimeout(() => {
        setCurrentIndex((prevIndex) =>
          prevIndex === items.length - 1 ? 0 : prevIndex + 1
        );
        setIsAnimating(false);
      }, 1000); // Medio segundo para la animación
    }, interval);

    return () => clearInterval(timer);
  }, [items.length, interval]);

  if (!items || items.length === 0) return null;

  // Si solo hay un texto, no necesitamos animación
  if (items.length === 1) {
    return (
      <div className={`relative h-[23px] ${className}`}>
        <div className="w-full text-left absolute top-1">
          <span className="inline-flex items-center justify-center gap-1">
            {images && images.current && images.current[currentIndex]}
            {items[0].message}
          </span>
        </div>
      </div>
    );
  }

  return (
    <>
      {images && images.current && images.current.length ? (
        <div className={`relative h-[23px] ${className}`}>
          <div
            className={`absolute w-full text-center transition-all duration-500 ease-in-out ${
              isAnimating
                ? direction === "left"
                  ? "-translate-x-full opacity-0"
                  : "translate-x-full opacity-0"
                : "translate-x-0 opacity-100"
            }`}
          >
            <span className="inline-flex items-center justify-center gap-1">
              {images && images.current && images.current[currentIndex]}
              <p className="mt-1">{items[currentIndex].message}</p>
            </span>
          </div>
        </div>
      ) : (
        <p>...loading</p>
      )}
    </>
  );
};

export default TextSlider;
