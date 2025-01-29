import React, { useMemo, useState, useEffect, useContext } from "react";
import CartContext from "./CartContext";
import AuthContext from "./AuthContext"; // Imported the AuthContext

const CartProvider = ({ children }) => {
  const { email } = useContext(AuthContext); // Get the logged-in user's email
  const [cartItems, setCartItems] = useState([]);

  // Generate the API URL with email as part of the route
  const userEndpoint = email ? email.replace(/[@.]/g, "") : "";
  //add a new crudcrud api as it expires after 24hrs or 100 function implementation
  const apiUrl = `https://crudcrud.com/api/418e882dd0874cad91335e74cb4f5689/cart${userEndpoint}`;

  // Function to fetch cart items from API when the user opens the cart
  const fetchCartItems = async () => {
    if (!email) return; // Only fetch if the user is logged in
  
    try {
      const response = await fetch(apiUrl);
      if (response.ok) {
        const data = await response.json();
        console.log("Fetched Cart Items:", data); // Log the response to inspect the data
  
        // Ensured each cart item has a valid numeric quantity
        const validatedData = data.map((item) => ({
          ...item,
          quantity: item.quantity && !isNaN(item.quantity) ? item.quantity : 1, // Default to 0 if invalid
        }));
  
        setCartItems(validatedData); // Updated state with validated items
      } else {
        console.error("Failed to fetch cart items");
      }
    } catch (error) {
      console.error("Error fetching cart items:", error);
    }
  };
  

  // Function to add an item to the cart and store it in the API
  const addToCart = async (item) => {
    if (!email) return; // Only add to cart if the user is logged in

    try {
      // Made POST request to add item to cart in the backend
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...item, quantity: 1 }), // Ensure quantity is set to 1 when adding new item
      });

      if (response.ok) {
        fetchCartItems(); // Refresh cart items after adding a new item
      } else {
        console.error("Failed to add item to cart");
      }
    } catch (error) {
      console.error("Error adding item to cart:", error);
    }
  };

  // Function to remove an item from the cart by title and delete from the API
  const removeFromCart = async (title) => {
    if (!email) return; // Only remove if the user is logged in

    try {
      const itemToRemove = cartItems.find((item) => item.title === title);
      if (!itemToRemove) return; // Exit if the item doesn't exist

      // Made DELETE request to remove the item from the backend
      const response = await fetch(`${apiUrl}/${itemToRemove._id}`, {
        method: "DELETE",
      });

      if (response.ok) {
        fetchCartItems(); // Refreshed cart items after removal
      } else {
        console.error("Failed to remove item from cart");
      }
    } catch (error) {
      console.error("Error removing item from cart:", error);
    }
  };

  // Calculated total number of items in the cart
  const cartCount = useMemo(
    () =>
      cartItems.reduce(
        (total, item) => total + (item.quantity && !isNaN(item.quantity) ? item.quantity : 0),
        0
      ),
    [cartItems]
  );

  // Fetch cart items on component mount and when email changes (user logs in/out)
  useEffect(() => {
    fetchCartItems();
  }, [email]);

  return (
    <CartContext.Provider value={{ cartItems, removeFromCart, addToCart, cartCount }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;