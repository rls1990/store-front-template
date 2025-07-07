"use client";
import React, { useState, useEffect, useRef } from "react";

interface PriceRangeProps {
  min?: number;
  max?: number;
  initialMin?: number;
  initialMax?: number;
  onChange?: (range: { min: number; max: number }) => void;
  currency?: string;
  className?: string;
  step?: number;
  label?: string;
}

export const PriceRange: React.FC<PriceRangeProps> = ({
  min = 0,
  max = 1000,
  initialMin = min,
  initialMax = max,
  onChange,
  currency = "$",
  className = "",
  step = 1,
  label = "Rango de Precio",
}) => {
  const [minValue, setMinValue] = useState<number>(initialMin);
  const [maxValue, setMaxValue] = useState<number>(initialMax);
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeThumb, setActiveThumb] = useState<"min" | "max" | null>(null);

  useEffect(() => {
    setMinValue(initialMin);
    setMaxValue(initialMax);
  }, [initialMin, initialMax]);

  const calculateValue = (clientX: number) => {
    if (!containerRef.current) return 0;

    const containerRect = containerRef.current.getBoundingClientRect();
    const relativeX = clientX - containerRect.left;
    const percentage = Math.min(
      Math.max(relativeX / containerRect.width, 0),
      1
    );
    const value = min + percentage * (max - min);

    return Math.round(value / step) * step;
  };

  const handleMouseDown = (thumb: "min" | "max") => {
    setActiveThumb(thumb);
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (!activeThumb) return;

    const value = calculateValue(e.clientX);

    if (activeThumb === "min") {
      const newMin = Math.min(value, maxValue - step);
      setMinValue(newMin);
      onChange?.({ min: newMin, max: maxValue });
    } else {
      const newMax = Math.max(value, minValue + step);
      setMaxValue(newMax);
      onChange?.({ min: minValue, max: newMax });
    }
  };

  const handleMouseUp = () => {
    setActiveThumb(null);
  };

  useEffect(() => {
    if (activeThumb) {
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("mouseup", handleMouseUp);
      return () => {
        window.removeEventListener("mousemove", handleMouseMove);
        window.removeEventListener("mouseup", handleMouseUp);
      };
    }
  }, [activeThumb, minValue, maxValue]);

  const minPosition = ((minValue - min) / (max - min)) * 100;
  const maxPosition = ((maxValue - min) / (max - min)) * 100;

  return (
    <div className={`${className}`}>
      {label && <h3 className="text-xs font-medium text-gray-600">{label}</h3>}

      <div ref={containerRef} className="relative h-8">
        {/* Background track */}
        <div className="absolute h-1.5 w-full bg-gray-200 rounded-full top-1/2 -translate-y-1/2" />

        {/* Active range track */}
        <div
          className="absolute h-1.5 bg-blue-500 rounded-full top-1/2 -translate-y-1/2"
          style={{ left: `${minPosition}%`, right: `${100 - maxPosition}%` }}
        />

        {/* Min thumb (visible) */}
        <div
          className="absolute w-4 h-4 bg-white border-2 border-blue-500 rounded-full shadow-md top-1/2 -translate-y-1/2 -ml-2 cursor-pointer hover:shadow-lg transition-transform duration-100 hover:scale-140"
          style={{ left: `${minPosition}%` }}
          onMouseDown={() => handleMouseDown("min")}
        />

        {/* Max thumb (visible) */}
        <div
          className="absolute w-4 h-4 bg-white border-2 border-blue-500 rounded-full shadow-md top-1/2 -translate-y-1/2 -ml-2 cursor-pointer hover:shadow-lg transition-transform duration-100 z-10 hover:scale-140"
          style={{ left: `${maxPosition}%` }}
          onMouseDown={() => handleMouseDown("max")}
        />
      </div>

      <div className="flex justify-between text-xs text-gray-500">
        <span>
          {currency}
          {minValue.toLocaleString()}
        </span>
        <span>
          {currency}
          {maxValue.toLocaleString()}
        </span>
      </div>
    </div>
  );
};
