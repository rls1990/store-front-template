"use client";
import { useCarStore } from "@/store/useCarStore";
import Link from "next/link";
import React from "react";
import { TiShoppingCart } from "react-icons/ti";

export const NavCar = () => {
  const { count } = useCarStore();
  return (
    <div className="absolute right-0 top-0 flex items-center justify-center h-full mr-3">
      <Link href="/car-list" className="relative">
        <TiShoppingCart className="size-10 text-emerald-700" />
        {count > 0 && <span className="px-[6px] bg-emerald-700/90 absolute top-0 right-0 rounded-full shadow-md shadow-gray-700 text-gray-100 flex text-sm">{count}</span>}
      </Link>
    </div>
  );
};
