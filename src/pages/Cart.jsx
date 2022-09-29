import React from "react";
import { Dashboard } from "../pages";
import CartWrapper from "../wrappers/CartWrapper";

const Cart = () => {
  return (
    <CartWrapper>
      <Dashboard />
      <h3>Cart</h3>
    </CartWrapper>
  );
};

export default Cart;
