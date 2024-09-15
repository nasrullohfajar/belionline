import { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "../ui/ProductCard";

interface productInterface {
  id: number;
  title: string;
  price: number;
  description: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

const Product = () => {
  const [productCategory, setProductCategory] = useState<string[]>([]);
  const [category, setCategory] = useState<string>("");
  const [product, setProduct] = useState<productInterface[]>([]);

  async function getData(
    url: string,
    setState: React.Dispatch<React.SetStateAction<any>>
  ) {
    try {
      const response = await axios.get(url);
      const data = await response.data;
      setState(data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getData("https://fakestoreapi.com/products/categories", setProductCategory);
  }, []);

  useEffect(() => {
    if (category) {
      getData(
        `https://fakestoreapi.com/products/category/${category}`,
        setProduct
      );
    } else {
      getData(`https://fakestoreapi.com/products`, setProduct);
    }
  }, [category]);

  function handleCategory(productCategory: string) {
    setCategory(productCategory);
  }

  return (
    <div className="max-w-[1500px">
      <ul className="flex text-[9px] lg:text-sm gap-4 lg:gap-6 mb-8">
        <li>
          <button
            onClick={() => handleCategory("")}
            className={`${category && "text-[#9c9c9c]"}`}
          >
            All Category
          </button>
        </li>
        {productCategory.map((productCategory, index) => (
          <li key={index}>
            <button
              onClick={() => handleCategory(productCategory)}
              className={`${
                productCategory != category && "text-[#9c9c9c]"
              } capitalize`}
            >
              {productCategory}
            </button>
          </li>
        ))}
      </ul>

      <div className="grid grid-cols-3 lg:grid-cols-5  gap-2">
        {product.map((product) => (
          <ProductCard
            key={product.id}
            image={product.image}
            name={product.title}
            rating={product.rating.rate}
            price={product.price}
          />
        ))}
      </div>
    </div>
  );
};

export default Product;
