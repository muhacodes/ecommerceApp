import React, { createContext, useState } from "react";

export const CartContext = createContext();

function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);

  const [selectedOption, setSelectedOption] = useState("");

  const [shippingOptions, setShippingOptions] = useState({});

  const ShippingOption = (option) => {
    setShippingOptions(option);
    console.log('shipping option is selected');
    console.log(option);
    console.log(shippingOptions);
  }

  const addItemToCart = (item) => {
    const existingItem = cartItems.find((cartItem) => cartItem.id === item.id);
    if (existingItem) {
      // Item already exists in the cart, update the quantity
      const updatedCartItems = cartItems.map((cartItem) => {
        if (cartItem.id === item.id) {
          return { ...cartItem, quantity: cartItem.quantity + 1 };
        }
        return cartItem;
      });
      setCartItems(updatedCartItems);
    } else {
      // Item doesn't exist in the cart, add the item
      setCartItems([...cartItems, { ...item, quantity: 1 }]);
    }
  };

  const removeItemFromCart = (item) => {
    const updatedCartItems = cartItems.filter(
      (cartItem) => cartItem.id !== item.id
    );
    setCartItems(updatedCartItems);
  };

  const incrementQuantity = (item) => {
    const updatedCartItems = cartItems.map((cartItem) => {
      if (cartItem.id === item.id) {
        return { ...cartItem, quantity: cartItem.quantity + 1 };
      }
      return cartItem;
    });
    setCartItems(updatedCartItems);
  };

  const decrementQuantity = (item) => {
    const updatedCartItems = cartItems.map((cartItem) => {
      if (cartItem.id === item.id) {
        const updatedQuantity = cartItem.quantity - 1;
        if (updatedQuantity >= 0) {
          return { ...cartItem, quantity: updatedQuantity };
        }
      }
      return cartItem;
    });
    setCartItems(updatedCartItems);
  };

  const clearCart = () => {
    setCartItems([]);
  };

  return (
    <CartContext.Provider
      value={{ cartItems, shippingOptions, addItemToCart, removeItemFromCart, clearCart, incrementQuantity, decrementQuantity, ShippingOption }}
    >
      {children}
    </CartContext.Provider>
  );
}

export default CartProvider;