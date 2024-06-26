import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import CartItem from "./CartItem";
import { Link } from "react-router-dom";
function Cart() {
  let cart = useSelector((state) => state.cart);

  useEffect(() => {
    console.log("cart", cart);
  }, [cart]);

  let items = Object.keys(cart);
  return (
    <div>
      <h1>Cart</h1>
      <div>
        {items.map((key) => {
          return <CartItem key={key} item={cart[key]} />;
        })}
      </div>
      <h3>
        Total:
        {items.reduce((total, key) => {
          return total + cart[key].price * cart[key].quantity;
        }, 0)}
      </h3>
      <Link to="/checkout">Checkout</Link>
    </div>
  );
}
export default Cart;
