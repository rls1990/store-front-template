"use client";

import { useState } from "react";
import StarIcon from "../../icons/StarIcon";
import DeleteIcon from "../../icons/DeleteIcon";

interface RatingProps {
  initialRating?: number;
  onChange?: (rating: number) => void;
  maxRating?: number;
  label?: string;
}

export default function Rating({
  initialRating = 0,
  onChange,
  maxRating = 5,
  label = "Filtrar por calificación:",
}: RatingProps) {
  const [rating, setRating] = useState(initialRating);
  const [hoverRating, setHoverRating] = useState(0);

  const handleClick = (selectedRating: number) => {
    const newRating = rating === selectedRating ? 0 : selectedRating;
    setRating(newRating);
    onChange?.(newRating);
  };

  return (
    <div className="space-y-2">
      {label && <p className="text-sm font-medium text-gray-700">{label}</p>}
      <div className="flex items-center [&_button]:cursor-pointer">
        {[...Array(maxRating)].map((_, index) => {
          const ratingValue = index + 1;
          return (
            <button
              key={index}
              type="button"
              className="focus:outline-none mr-1"
              onClick={() => handleClick(ratingValue)}
              onMouseEnter={() => setHoverRating(ratingValue)}
              onMouseLeave={() => setHoverRating(0)}
              aria-label={`${ratingValue} ${
                ratingValue === 1 ? "estrella" : "estrellas"
              }`}
            >
              <StarIcon
                className={`h-6 w-6 ${
                  ratingValue <= (hoverRating || rating)
                    ? "[&_g]:stroke-yellow-400"
                    : "[&_g]:stroke-gray-300"
                }`}
              />
            </button>
          );
        })}

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
      </div>
    </div>
  );
}
