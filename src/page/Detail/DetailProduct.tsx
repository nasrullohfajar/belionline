import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import DetailProductImage from "./DetailProductImage";
import DetailProductDescription from "./DetailProductDescription";
import ButtonBack from "../../component/ui/ButtonBack";
import getData from "../../utils/getData";
import { productInterface } from "../../types/types";
import Loading from "../../component/ui/Loading";

const DetailProduct = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const params = useParams();
  const id = params.id;
  const [productDetail, setProductDetail] = useState<productInterface>();

  useEffect(() => {
    getData(`https://fakestoreapi.com/products/${id}`, setProductDetail);
    setLoading(false);
  }, [id]);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div>
          <ButtonBack page={"product"} />

          <DetailProductImage image={productDetail?.image} />

          {productDetail && (
            <DetailProductDescription
              title={productDetail?.title}
              rating={productDetail?.rating}
              price={productDetail?.price}
              description={productDetail?.description}
            />
          )}
        </div>
      )}
    </>
  );
};

export default DetailProduct;
