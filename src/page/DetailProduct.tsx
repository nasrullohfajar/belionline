import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import DetailProductImage from "../component/ui/DetailProductImage";
import getData from "../utils/getData";
import { productInterface } from "../types/types";

const DetailProduct = () => {
  const params = useParams();
  const id = params.id;
  const [productDetail, setProductDetail] = useState<productInterface>();

  useEffect(() => {
    getData(`https://fakestoreapi.com/products/${id}`, setProductDetail);
  }, [id]);

  return (
    <div className="">
      <DetailProductImage image={productDetail?.image} />
    </div>
  );
};

export default DetailProduct;
