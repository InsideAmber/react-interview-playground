// src/components/StarRating.tsx
import React from "react";
import { FaRegStar, FaStar, FaStarHalfAlt } from "react-icons/fa";

// implement half filled stars

const starData = [
  { id: 1, filled: false },
  { id: 2, filled: false },
  { id: 3, filled: false },
  { id: 4, filled: false },
  { id: 5, filled: false },
];

const StarRating: React.FC = () => {
  const [stars, setStars] = React.useState(starData);

  const onStarClick = (rating: number) => {
    console.log(`Rated ${rating} stars`);
    const updatedStars = stars.map((star) => ({
      ...star,
      filled: star.id <= rating,
    }));
    setStars(updatedStars);
  };

  return (
    <div className="flex space-x-2">
      {stars.map((star) => (
        <button
          onClick={() => onStarClick(star.id)}
          key={star.id}
          className="text-gray-400 hover:text-yellow-400 transition-colors"
        >
          {star.filled && <FaStar className="w-8 h-8" />}
          {!star.filled && <FaRegStar className="w-8 h-8" />}
        </button>
      ))}
    </div>
  );
};

export default StarRating;
