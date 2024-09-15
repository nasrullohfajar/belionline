import StarRating from "./StarRating";

interface ProductCardInterface {
  image: string;
  name: string;
  rating: number;
  price: number;
}

const ProductCard = ({ name, rating, price, image }: ProductCardInterface) => {
  return (
    <button className="w-28 lg:w-56 h-52 lg:h-72 border">
      <div
        className="h-36 lg:h-48 bg-center bg-no-repeat overflow-hidden bg-70% lg:bg-40%"
        style={{ backgroundImage: `url(${image})` }}
      ></div>
      <div className="p-2 text-center">
        <p className="text-[8px] lg:text-sm truncate mb-2">{name}</p>
        <div className="flex items-center justify-center gap-x-1 mb-2">
          <StarRating rating={rating} />
        </div>

        <p className="text-[8px] lg:text-sm truncate">$ {price}</p>
      </div>
    </button>
  );
};

export default ProductCard;
