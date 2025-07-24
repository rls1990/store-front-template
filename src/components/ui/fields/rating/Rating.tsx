"use client";

import { useState } from "react";
import DeleteIcon from "../../icons/DeleteIcon";
import { FaRegStar, FaStar } from "react-icons/fa";

interface RatingProps {
  initialRating?: number;
  onChange?: (rating: number) => void;
  maxRating?: number;
  label?: string;
  className?: string;
  readonly?: boolean;
}

export default function Rating({
  initialRating = 0,
  onChange,
  maxRating = 5,
  label = "Filtrar por calificación:",
  className,
  readonly = false,
}: RatingProps) {
  const [rating, setRating] = useState(initialRating);
  const [hoverRating, setHoverRating] = useState(0);

  const handleClick = (selectedRating: number) => {
    const newRating = rating === selectedRating ? 0 : selectedRating;
    setRating(newRating);
    onChange?.(newRating);
  };

  return (
    <div className={"space-y-2" + className && ` ${className}`}>
      {label && (
        <label className="block text-[14px] font-medium text-gray-600 mb-1">
          {label}
        </label>
      )}
      <div className="flex items-center [&_button]:cursor-pointer">
        {[...Array(maxRating)].map((_, index) => {
          const ratingValue = index + 1;
          return (
            <button
              key={index}
              type="button"
              className="focus:outline-none mr-1"
              onClick={() => !readonly && handleClick(ratingValue)}
              onMouseEnter={() => !readonly && setHoverRating(ratingValue)}
              onMouseLeave={() => !readonly && setHoverRating(0)}
              aria-label={`${ratingValue} ${
                ratingValue === 1 ? "estrella" : "estrellas"
              }`}
            >
              {ratingValue <= (hoverRating || rating) ? (
                <FaStar className="size-5 text-yellow-500" />
              ) : (
                <FaRegStar className="size-5 text-gray-400" />
              )}
            </button>
          );
        })}

        {!readonly && (
          <button
            onClick={() => {
              setRating(0);
              onChange?.(0);
            }}
            disabled={rating == 0}
            className={`transition-all ${
              rating > 0 ? "opacity-100" : "opacity-0"
            }`}
          >
            <DeleteIcon />
          </button>
        )}
      </div>
    </div>
  );
}
