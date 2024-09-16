import HomeHeroImage from "./HomeHeroImage";
import HomeProduct from "./HomeProduct";

const Home = () => {
  return (
    <>
      <HomeHeroImage />
      <div className="flex justify-center items-center gap-y-10 px-6 my-8">
        <HomeProduct />
      </div>
    </>
  );
};

export default Home;
