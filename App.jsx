//import React from "react";
// import Navbar from "./Components/Navbar/Navbar";
// import Contact from "./Components/Contact/Contact";
// import Footer from "./Components/Footer/Footer";
import Cards from "./Components/Cards"
import {data} from "./data";

export default function App() {

  const dataShow = data.map((e, index) =>
      <Cards
        key={ index }
        img={e.img}
        title={ e.title }
        desc={e.desc}
        review={ e.review }
        price={e.price}
      />);

  return (
    <>
      {dataShow}
    </>
  );
}