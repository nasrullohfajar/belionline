import StarRating from "../../component/ui/StarRating";

interface productDesctionInterface {
  title: string;
  rating: {
    rate: number;
    count: number;
  };
  price: number;
  description: string;
}

const DetailProductDescription = ({
  title,
  rating,
  price,
  description,
}: productDesctionInterface) => {
  return (
    <div className="p-6 space-y-12">
      <div className="space-y-2">
        <p className="text-lg">{title}</p>
        <div className="flex items-center justify-start gap-x-1 mb-2">
          <StarRating rating={rating.rate} />
          <p className="text-[8px]">
            <span>{rating.rate}</span>
            <span> ({rating.count} rating)</span>
          </p>
        </div>
        <p className="text-2xl">${price}</p>
      </div>

      <div className="space-y-2">
        <p className="text-sm">Description</p>
        <p className="text-xs text-[#646464]">{description}</p>
      </div>

      <div>
        <button className="absolute bottom-0 left-0 w-full h-12 bg-[#222222] text-sm text-white">
          Add To Cart
        </button>
      </div>
    </div>
  );
};

export default DetailProductDescription;
