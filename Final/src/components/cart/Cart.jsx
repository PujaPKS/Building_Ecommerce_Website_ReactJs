import React, { useContext } from "react";
import CartContext from "../../context/CartContext";
import './Cart.css'; // Ensure your CSS file is imported

const Cart = ({ showCart, toggleCart }) => {
  const { cartItems, removeFromCart } = useContext(CartContext);

  // If the cart is empty, show this message
  if (!cartItems || cartItems.length === 0) {
    return <div>Your cart is empty!</div>;
  }

  return (
    <div className={`cart-overlay ${showCart ? "open" : ""}`}>
      <div className="cart-container">
        {/* Close button to toggle cart visibility */}
        <button className="close-cart" onClick={toggleCart}>X</button>
        <h2>Your Cart</h2>
        <ul>
          {cartItems.map((item) => (
            <li key={item.title}>
              <img src={item.imageUrl} alt={item.title} style={{ width: "50px" }} />
              <div>{item.title}</div>
              <div>${item.price}</div>
              <div>Quantity: {item.quantity}</div>
              <button onClick={() => removeFromCart(item.title)}>Remove</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Cart;
