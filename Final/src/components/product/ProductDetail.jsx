import React from "react";
import { useParams } from "react-router-dom";
import "./ProductDetail.css"; // Import the CSS file for styling

// Sample product data (replace this with data from your database or API)
const products = [
  {
    id: "1",
    name: "Product 1",
    images: [
      "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
    ],
    reviews: ["Excellent product!", "Great value for money!", "Highly recommend"],
  },
  {
    id: "2",
    name: "Product 2",
    images: [
      "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
    ],
    reviews: ["Very good quality!", "Fast delivery!", "Perfect for my needs"],
  },
  {
    id: "3",
    name: "Product 3",
    images: [
      "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
    ],
    reviews: ["Excellent product!", "Great value for money!", "Highly recommend"],
  },
  {
    id: "4",
    name: "Product 4",
    images: [
      "https://prasadyash2411.github.io/ecom-website/img/Album%204.png"
    ],
    reviews: ["Very good quality!", "Fast delivery!", "Perfect for my needs"],
  },
  {
    id: "5",
    name: "Product 5",
    images: [
      "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
    ],
    reviews: ["Excellent product!", "Great value for money!", "Highly recommend"],
  },
  {
    id: "6",
    name: "Product 6",
    images: [
      "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
    ],
    reviews: ["Very good quality!", "Fast delivery!", "Perfect for my needs"],
  },
];

const ProductDetail = () => {
  const { productId } = useParams(); // Get the dynamic product ID from the URL
  const product = products.find((p) => p.id === productId);

  // Handle case where product is not found
  if (!product) {
    return <h2 style={{ textAlign: "center" }}>Product not found!</h2>;
  }

  return (
    <div className="product-detail">
      <h1>{product.name}</h1>
      
      {/* Product Images */}
      <div className="product-images">
        {product.images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Product ${product.id} - ${index + 1}`}
            className="product-image"
          />
        ))}
      </div>

      {/* Product Reviews */}
      <div className="product-reviews">
        <h2>Customer Reviews</h2>
        <ul>
          {product.reviews.map((review, index) => (
            <li key={index}>{review}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ProductDetail;