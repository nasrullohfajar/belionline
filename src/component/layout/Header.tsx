import Cart from "../../assets/cart.png";

const cart = ["item1", "item2", "item3"];
// const cart = [];

const Header = () => {
  return (
    <div className="flex h-20 items-center justify-between px-10 shadow">
      <h1 className="text-lg">TreasureCart</h1>
      <div className="flex items-center justify-center gap-4">
        <a href="" className="relative">
          <img src={Cart} alt="cart icon" className="h-4" />
          {cart.length > 0 ? (
            <div className="absolute flex items-center justify-center bottom-4 left-4 bg-[#373737] h-3 w-3 rounded-full">
              <p className="text-[7px] text-white">{cart.length}</p>
            </div>
          ) : (
            <></>
          )}
        </a>

        <p className="text-xs">John Doe</p>
      </div>
    </div>
  );
};

export default Header;
