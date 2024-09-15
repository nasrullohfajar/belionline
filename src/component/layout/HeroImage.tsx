import image from "../../../public/img/heroimage.jpg";

const HeroImage = () => {
  return (
    <div
      className="h-[200px] w-full lg:h-[400px] bg-cover bg-no-repeat overflow-hidden"
      style={{
        backgroundImage: `url(${image})`,
        backgroundPosition: "50% 40%",
      }}
    ></div>
  );
};

export default HeroImage;
