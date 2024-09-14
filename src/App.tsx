import { useState } from "react";
import "./index.css";
import Header from "./component/Header";
import HeroImage from "./component/HeroImage";
import Product from "./component/Product";

function App() {
  return (
    <>
      <Header />
      <HeroImage />
      <div className="flex gap-y-10 px-6 my-8">
        <Product />
      </div>
    </>
  );
}

export default App;
