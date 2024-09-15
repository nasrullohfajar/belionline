import { FaStar } from "react-icons/fa";

const StarRating = ({ rating }: { rating: number }) => {
  const stars = [];

  for (let i = 0; i < 5; i++) {
    const currentRating = rating - i;
    if (currentRating >= 1) {
      stars.push(
        <FaStar key={i} className="text-yellow-400 w-2 lg:w-4 h-2 lg:h-4" />
      );
    } else if (currentRating > 0) {
      stars.push(
        <div key={i} className="relative w-2 lg:w-4 h-2 lg:h-4">
          <FaStar className="text-gray-300 absolute w-full h-full" />
          <FaStar
            className="text-yellow-400 absolute w-full h-full"
            style={{
              clipPath: `inset(0 ${100 - currentRating * 100}% 0 0)`,
            }}
          />
        </div>
      );
    } else {
      stars.push(
        <FaStar key={i} className="text-gray-300 w-2 lg:w-4 h-2 lg:h-4" />
      );
    }
  }

  return stars;
};

export default StarRating;
