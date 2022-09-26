import React from "react";
import { Dashboard } from "../pages";
import CartWrapper from "../wrappers/CartWrapper";
import { useSelector } from "react-redux";
import { getCartStorageItem } from "../utils/localStorageData";

const Cart = () => {
  const getCartItem = getCartStorageItem();
  const { quantity } = useSelector((store) => store.cart);

  return (
    <CartWrapper>
      <Dashboard />
      <h3>Cart</h3>
      <h3>{getCartItem?.quantity}</h3>
    </CartWrapper>
  );
};

export default Cart;
