import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { productInterface } from "../../types/types";
import getData from "../../utils/getData";
import CartItem from "./CartItem";
import Loading from "../../component/ui/Loading";
import ButtonBack from "../../component/ui/ButtonBack";

interface cartInterface {
  id: number;
  userId: number;
  date: string;
  products: {
    productId: number;
    quantity: number;
  }[];
}

const Cart = () => {
  const params = useParams();
  const userId = params.id;

  const [cart, setCart] = useState<cartInterface[]>([]);
  const [product, setProduct] = useState<productInterface[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    if (userId) {
      getData(`https://fakestoreapi.com/carts/user/${userId}`, setCart);
      getData(`https://fakestoreapi.com/products`, setProduct);
    }

    setLoading(false);
  }, [userId]);

  const getCartProducts = () => {
    return cart
      .flatMap((c) =>
        c.products.map((cartProduct) => {
          const productDetails = product.find(
            (p) => p.id === cartProduct.productId
          );

          if (productDetails) {
            return {
              ...productDetails,
              quantity: cartProduct.quantity,
            };
          }
          return null;
        })
      )
      .filter((item) => item !== null);
  };

  const cartProducts = getCartProducts();

  return (
    <div className="max-w-[1500px] px-6">
      {loading ? (
        <Loading />
      ) : (
        <div>
          <ButtonBack page={"Cart"} />
          {cartProducts.map((cartProduct) => (
            <CartItem
              key={cartProduct.id}
              title={cartProduct.title}
              price={cartProduct.price}
              image={cartProduct.image}
              quantity={cartProduct.quantity}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Cart;
