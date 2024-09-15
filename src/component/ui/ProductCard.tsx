import StarRating from "./StarRating";

interface ProductCardInterface {
  name: string;
  rating: number;
  price: number;
}

const ProductCard = ({ name, rating, price }: ProductCardInterface) => {
  return (
    <div className="w-28 h-52 border">
      <div className="h-36 bg-red-900"></div>
      <div className="p-2 text-center">
        <p className="text-[8px] truncate mb-2">{name}</p>
        <div className="flex items-center justify-center gap-x-1 mb-2">
          <StarRating rating={rating} />
        </div>

        <p className="text-[8px] truncate">$ {price}</p>
      </div>
    </div>
  );
};

export default ProductCard;
