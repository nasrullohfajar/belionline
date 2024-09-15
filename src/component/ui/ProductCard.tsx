import StarRating from "./StarRating";

interface ProductCardInterface {
  image: string;
  name: string;
  rating: number;
  price: number;
}

const ProductCard = ({ name, rating, price, image }: ProductCardInterface) => {
  return (
    <button className="w-28 h-52 border">
      <div
        className="h-36 bg-cover bg-center bg-no-repeat overflow-hidden"
        style={{ backgroundImage: `url(${image})`, backgroundSize: "70%" }}
      ></div>
      <div className="p-2 text-center">
        <p className="text-[8px] truncate mb-2">{name}</p>
        <div className="flex items-center justify-center gap-x-1 mb-2">
          <StarRating rating={rating} />
        </div>

        <p className="text-[8px] truncate">$ {price}</p>
      </div>
    </button>
  );
};

export default ProductCard;
