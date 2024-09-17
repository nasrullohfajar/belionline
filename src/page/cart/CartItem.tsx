import { useState, useEffect } from "react";
import { CiSquarePlus, CiSquareMinus } from "react-icons/ci";

interface cardProductInterface {
  title: string;
  price: number;
  image: string;
  quantity: number;
}

const CartItem = ({ title, price, image, quantity }: cardProductInterface) => {
  const [productQuantity, setProductQuantity] = useState<number>(quantity);

  useEffect(() => {}, [productQuantity]);

  return (
    <div className="flex h-40 lg:h-56 py-3 border-b gap-x-5">
      <div
        className=" w-28 lg:w-48 h-full bg-70% bg-no-repeat bg-center"
        style={{ backgroundImage: `url(${image})` }}
      ></div>

      <div className="w-60 lg:w-[500px] space-y-3 text-xs lg:text-lg">
        <p>{title}</p>
        <p>${price * productQuantity}</p>
        <div className="flex gap-x-2 items-center">
          <p className="text-[8px] lg:text-sm text-[#646464]">Quantity:</p>

          <button
            onClick={() =>
              productQuantity > 1 && setProductQuantity(productQuantity - 1)
            }
          >
            <CiSquareMinus size={22} className="" />
          </button>

          <p>{productQuantity}</p>

          <button onClick={() => setProductQuantity(productQuantity + 1)}>
            <CiSquarePlus size={22} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
