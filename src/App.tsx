import { Routes, Route } from "react-router-dom";
import "./index.css";
import Header from "./component/layout/Header";
import Home from "./page/home/Home";
import DetailProduct from "./page/detailProduct/DetailProduct";
import Cart from "./page/cart/Cart";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detail/:id" element={<DetailProduct />} />
        <Route path="/cart/:id" element={<Cart />} />
      </Routes>
    </>
  );
}

export default App;
