const DetailProductImage = ({ image }: { image: string | undefined }) => {
  return (
    <div
      className="h-56 bg-center bg-30% bg-no-repeat border"
      style={{ backgroundImage: `url(${image})` }}
    ></div>
  );
};

export default DetailProductImage;
