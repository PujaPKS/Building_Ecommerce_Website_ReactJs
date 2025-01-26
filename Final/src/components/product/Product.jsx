import React from 'react';
import './Product.css';

const Product = ({ title, price, imageUrl }) => {
  return (
    <div className="product-card mb-4 "> 
      <h3 className="card-title">{title}</h3>
      <div className="card-img-container"> 
        <img
          src={imageUrl}
          alt={title}
          className="card-img-top" 
          style={{ transition: "transform 0.3s ease" }} 
          onMouseEnter={(e) => (e.target.style.transform = "scale(1.1)")}
          onMouseLeave={(e) => (e.target.style.transform = "scale(1)")}
        />
      </div>
      <div className="card-body mt-3">
        <p className="card-price">${price}</p>
        <button className="btn btn-primary card-button">ADD TO CART</button>
      </div>
    </div>
  );
};

export default Product;