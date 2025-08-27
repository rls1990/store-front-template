"use client";

import { useCarStore } from "@/store/useCarStore";

const CarListPage = () => {
  const { count } = useCarStore();
  return (
    <div>
      <div>CarListPage: {count ? count : "loading..."}</div>
    </div>
  );
};

export default CarListPage;
