import { useEffect, useState } from "react";
import axios from "axios";

const Product = () => {
  const [productCategory, setProductCategory] = useState<string[]>([]);
  const [category, setCategory] = useState<string>("");

  useEffect(() => {
    async function getData() {
      try {
        const response = await axios.get(
          "https://fakestoreapi.com/products/categories"
        );
        const data = await response.data;
        setProductCategory(data);
      } catch (error) {
        console.log(error);
      }
    }

    getData();
  }, []);

  function handleCategory(productCategory: string) {
    setCategory(productCategory);
  }

  return (
    <>
      <ul className="flex text-[9px] gap-4 ">
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
    </>
  );
};

export default Product;
