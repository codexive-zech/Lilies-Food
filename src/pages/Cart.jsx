import React from "react";
import { Dashboard } from "../pages";
import CartWrapper from "../wrappers/CartWrapper";
import { useSelector } from "react-redux";
import { getCartStorageItem } from "../utils/localStorageData";

const Cart = () => {
  return (
    <CartWrapper>
      <Dashboard />
      <h3>Cart</h3>
    </CartWrapper>
  );
};

export default Cart;
