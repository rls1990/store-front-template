"use client";

import { ItemSlider } from "@/data/slider-hero";
import Image from "next/image";
import { FC, ReactNode, useEffect, useState } from "react";
import LeftArrow from "../icons/LeftArrow";
import RightArrow from "../icons/RightArrow";
import Link from "next/link";
import { FaBox } from "react-icons/fa";

interface SliderHeroProps {
  items: ItemSlider[];
  interval?: number;
  className?: string;
}

const SliderHero: FC<SliderHeroProps> = ({ items, interval = 10000 }) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  // const images = useRef<ReactNode[] | null>(null);
  const [images, setImages] = useState<ReactNode[] | null>(null);

  useEffect(() => {
    const imgs: ReactNode[] = [];
    items.forEach((item) => {
      imgs.push(
        <Image
          src={item.image}
          width={400}
          height={400}
          className="h-[270px] md:h-[290px] lg:h-[350px] w-auto mask-x-from-95% mask-y-from-95% slide-right-zoom"
          alt={items[currentIndex].title}
          priority
        />
      );
    });
    // images.current = imgs;
    setImages(imgs);
  }, [items, currentIndex]);

  const nextIndex = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === items.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevIndex = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? items.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    const timer = setInterval(
      () => {
        setTimeout(() => {
          setCurrentIndex((prevIndex) =>
            prevIndex === items.length - 1 ? 0 : prevIndex + 1
          );
        }, 1000);
      },
      interval,
      images
    );

    return () => clearInterval(timer);
  }, [currentIndex]);

  if (!items || items.length === 0) return null;
  return (
    <div className="w-full h-[83vh] relative">
      {/* left right buttons */}
      <button
        className="cursor-pointer transition-all active:scale-90 m-3 rounded-2xl absolute right-0 -rotate-90 top-[55%] sm:right-auto sm:top-[40%] sm:rotate-0 opacity-70 z-40"
        onClick={prevIndex}
        disabled={images && images && images.length > 0 ? false : true}
      >
        <LeftArrow className="size-12" />
      </button>
      <button
        className="cursor-pointer transition-all active:scale-90 m-3 rounded-2xl absolute right-0 -rotate-90 top-[40%] sm:right-0 sm:top-[40%] sm:rotate-0 opacity-70 hover:opacity-90 z-40"
        onClick={nextIndex}
        disabled={images && images && images.length > 0 ? false : true}
      >
        <RightArrow className="size-12" />
      </button>

      {/*Progress Indicators */}
      <span className="absolute bottom-3 w-full flex items-center justify-center gap-3 z-40">
        {images && images && images?.length > 0 ? (
          items.map((_item, index) => (
            <button
              key={index + "progi"}
              className={
                index == currentIndex
                  ? "p-2 bg-emerald-700 rounded-full hover:bg-emerald-700/50 cursor-pointer transition-all"
                  : "p-1.5 bg-gray-300 rounded-full hover:bg-emerald-700/50 hover:scale-150 cursor-pointer transition-all"
              }
              onClick={() => setCurrentIndex(index)}
            />
          ))
        ) : (
          <>
            <div className="p-1 bg-gray-400 rounded-full border-gray-200 border-2 animate-pulse" />
            <div className="bg-gray-400 rounded-full border-gray-200 border-2 animate-pulse" />
            <div className="bg-gray-400 rounded-full border-gray-200 border-2 animate-pulse" />
          </>
        )}
      </span>

      {/* Slider Items */}
      {images && images.length > 0 ? (
        <div
          key={Date.now()}
          className="w-full h-full fade-in grid grid-cols-1 justify-items-center items-center lg:grid-cols-2 overflow-x-hidden"
        >
          <div className="w-full h-full flex items-end justify-center lg:justify-end lg:items-center overflow-hidden mask-x-from-95% mask-y-from-95%">
            {images && images[currentIndex]}
          </div>

          <div className="w-full h-full flex flex-col items-center lg:justify-center lg:items-baseline lg:pl-12 slide-left">
            <h1 className="text-xl lg:text-4xl font-semibold text-emerald-700">
              {items[currentIndex].title}
            </h1>

            <p className="text-sm text-emerald-700 text-center w-[37ch] lg:w-[50ch] lg:text-left">
              {items[currentIndex].subtitle}
            </p>

            <Link
              className="inline-block bg-gradient-to-r from-emerald-500 to-teal-600 text-white font-semibold py-1 px-4 rounded-full shadow-md hover:bg-gray-100 transition duration-300 ease-in-out text-lg mt-5"
              href={items[currentIndex].route}
            >
              <span className="inline-flex items-center justify-center gap-2 p-2">
                <FaBox className="text-white" />
                <span className="pt-1">Ver Producto</span>
              </span>
            </Link>
          </div>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default SliderHero;
