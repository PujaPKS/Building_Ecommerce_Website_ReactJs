import React from 'react'
import Product from '../product/Product';
import './Div.css';
import { Link } from 'react-router-dom';

const SecondDiv = ({ products, addToCart }) => {
    return (
      <div className="container mt-0">
        <h2 className="heading"> Merch </h2>
        <div className="custom-margin d-flex -flex-row justify-content-center align-items-center flex-wrap">
          {products.map((product) => (
            <div className="product-row" key={product.id}>
              <Link to={`/product/${product.id}`} style={{ textDecoration: "none", color: "inherit" }} >
              <Product title={product.title} price={product.price} imageUrl={product.imageUrl} addToCart={addToCart} />
              </Link>
            </div>
          ))}
        </div>
      </div>
    );
  };

export default SecondDiv