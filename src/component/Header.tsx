import Cart from "../assets/cart.png";

const cart = ["item1", "item2", "item3"];
// const cart = [];

const Header = () => {
  return (
    <div className="flex h-16 items-center justify-between px-32 shadow">
      <h1 className="text-3xl">TreasureCart</h1>
      <div className="flex items-center justify-center gap-5">
        <a href="" className="relative">
          <img src={Cart} alt="cart icon" className="h-6" />
          {cart.length > 0 ? (
            <div className="absolute flex items-center justify-center bottom-5 left-5 bg-[#9a9a9a] h-4 w-4 rounded-full">
              <p className="text-xs text-white">{cart.length}</p>
            </div>
          ) : (
            <></>
          )}
        </a>

        <p className="text-lg">John Doe</p>
      </div>
    </div>
  );
};

export default Header;
