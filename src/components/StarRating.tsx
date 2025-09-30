// src/components/StarRating.tsx
import React from "react";
import { FaRegStar, FaStar, FaStarHalfAlt } from "react-icons/fa";

const StarRating: React.FC = () => {
  const [rating, setRating] = React.useState<number>(0);

  const onStarClick = (value: number) => {
    console.log(`Star ${value} clicked`);
    // toggle half-star if clicked twice
    if (rating === value) {
      setRating(value - 0.5); // e.g., 3 → 2.5
    } else {
      setRating(value);
    }
   
  };

   console.log(`Rated ${rating} stars`);

  return (
    <div className="flex space-x-2">
      {[1, 2, 3, 4, 5].map((star) => {
        let icon;
        if (rating >= star) {
          icon = <FaStar className="w-8 h-8 text-yellow-400" />;
        } else if (rating >= star - 0.5) {
          icon = <FaStarHalfAlt className="w-8 h-8 text-yellow-400" />;
        } else {
          icon = <FaRegStar className="w-8 h-8 text-gray-400" />;
        }

        return (
          <button
            key={star}
            onClick={() => onStarClick(star)}
            className="transition-colors"
          >
            {icon}
          </button>
        );
      })}
    </div>
  );
};

export default StarRating;
