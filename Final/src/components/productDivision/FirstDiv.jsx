import React from 'react'
import Product from '../product/Product';
import './Div.css';

const FirstDiv = ({ products }) => {
    return (
      <div className="container mt-0">
        <h2 className="heading">Music</h2>
        <div className="d-flex -flex-row justify-content-center align-items-center flex-wrap">
          {products.map((product, index) => (
            <div className="product-row" key={index}>
              <Product title={product.title} price={product.price} imageUrl={product.imageUrl} />
            </div>
          ))}
        </div>
      </div>
    );
  };

export default FirstDiv