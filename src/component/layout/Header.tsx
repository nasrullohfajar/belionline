import { IoCart } from "react-icons/io5";

const cart = ["item1", "item2", "item3"];
// const cart = [];

const Header = () => {
  return (
    <div className="flex h-16 items-center justify-between px-10 lg:px-20 shadow">
      <h1 className="text-lg lg:text-xl">TreasureCart</h1>
      <div className="flex items-center justify-center gap-4">
        <a href="" className="relative">
          <IoCart size={18} />
          {cart.length > 0 ? (
            <div className="absolute flex items-center justify-center bottom-4 left-4 bg-[#373737] h-3 w-3 rounded-full">
              <p className="text-[5px] lg:text-[8px] text-white">
                {cart.length}
              </p>
            </div>
          ) : (
            <></>
          )}
        </a>

        <p className="text-xs lg:text-sm">John Doe</p>
      </div>
    </div>
  );
};

export default Header;
