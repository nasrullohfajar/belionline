import HeroImage from "../component/layout/HeroImage";
import Product from "../component/layout/Product";

const Home = () => {
  return (
    <>
      <HeroImage />
      <div className="flex justify-center items-center gap-y-10 px-6 my-8">
        <Product />
      </div>
    </>
  );
};

export default Home;
