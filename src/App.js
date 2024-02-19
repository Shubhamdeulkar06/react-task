import React from "react";
import Hero from "./components/hero/Hero";
import Product from "./components/product/Product";
import CargoSlider2 from "./components/slider/slanting2";
import img1 from "./assets/images/hero/pexels-lisa-fotios-1855981.jpg";
import img2 from "./assets/images/hero/pexels-connor-danylenko-3075535.jpg";
import img3 from "./assets/images/hero/pexels-lisa-fotios-2061751.jpg";
import img4 from "./assets/images/hero/pexels-ryutaro-tsukata-5472601.jpg";

const App = () => {
  return (
    <>
      <Hero />
      <Product />
      <CargoSlider2 images={[img1, img2, img3, img4]} numCells={8} />
    </>
  );
};

export default App;
