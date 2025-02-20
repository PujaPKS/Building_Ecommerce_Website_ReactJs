import React, { useContext } from "react";
import FirstDiv from "../productDivision/FirstDiv";
import SecondDiv from "../productDivision/SecondDiv";
import './Store.css';
import CartContext from "../../context/CartContext";

const productsArr = [
  {
    id: 1,
    title: "Colors",
    price: 100,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
  },
  {
    id: 2,
    title: "Black and white Colors",
    price: 50,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
  },
  {
    id: 3,
    title: "Yellow and black Color",
    price: 70,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
  },
  {
    id: 4,
    title: "Blue Color",
    price: 100,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
  },
  {
    id: 5,
    title: "Colors",
    price: 100,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
  },
  {
    id: 6,
    title: "Black and white Colors",
    price: 50,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
  },
];

const Store = ({toggleCart}) => {
  const { addToCart } = useContext(CartContext); // Get addToCart function from context

  const firstHalf = productsArr.slice(0, 4);
  const secondHalf = productsArr.slice(4);

  return (
    <>
      <h1 className="top mt-2 pt-5 pb-3">The Generics</h1>
      <FirstDiv products={firstHalf} addToCart={addToCart}/>
      <SecondDiv products={secondHalf} addToCart={addToCart}/>
      <div>
        <button onClick={toggleCart} className="seeCart">See the Cart</button>
      </div>
    </>
  );
};

export default Store;