const DetailProductImage = ({ image }: { image: string | undefined }) => {
  return (
    <div
      className="h-56 lg:h-[calc(100vh-192px)] lg:w-[500px] xl:w-[700px] bg-center bg-30% lg:bg-60% bg-no-repeat border"
      style={{ backgroundImage: `url(${image})` }}
    ></div>
  );
};

export default DetailProductImage;
