import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { IoCart } from "react-icons/io5";
import getData from "../../utils/getData";

interface userInterface {
  id: number;
  name: {
    firstname: string;
    lastname: string;
  };
}

interface cartInterface {
  id: number;
  products: {
    productId: number;
    quantity: number;
  }[];
}

const Header = () => {
  const [user, setUser] = useState<userInterface>();
  const [cart, setCart] = useState<cartInterface[]>([]);

  const navigate = useNavigate();
  const userId = 2;

  function handleCart() {
    navigate(`/cart/${userId}`);
  }

  useEffect(() => {
    getData(`https://fakestoreapi.com/users/${userId}`, setUser);
    getData(`https://fakestoreapi.com/carts/user/${userId}`, setCart);
  }, []);

  const productCount = cart.length > 0 ? cart[0].products.length : 0;

  return (
    <div className="flex h-16 items-center justify-between px-10 lg:px-20 shadow">
      <h1 className="text-lg lg:text-xl">TreasureCart</h1>
      <div className="flex items-center justify-center gap-4">
        <button className="relative" onClick={handleCart}>
          <IoCart size={18} />
          {productCount > 0 ? (
            <div className="absolute flex items-center justify-center bottom-4 left-4 bg-[#373737] h-3 w-3 rounded-full">
              <p className="text-[5px] lg:text-[8px] text-white">
                {productCount}
              </p>
            </div>
          ) : (
            <></>
          )}
        </button>

        <p className="text-xs lg:text-sm capitalize">
          <span>{user?.name.firstname} </span>
          {user?.name.lastname}
        </p>
      </div>
    </div>
  );
};

export default Header;
