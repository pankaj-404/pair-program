import React from "react";
import { Link } from "react-router-dom";

const style1 = {
  background: "gray",
  padding: 10,
};
const style2 = {
  color: "white",
  fontSize: 20,
  textDecoration: "none",
  margin: "5px 15px",
};

export default function Navbar() {
  return (
    <div style={style1}>
      <Link style={style2} to="/">
        Home
      </Link>
      <Link style={style2} to="/products">
        Products
      </Link>
      <Link style={style2} to="/cart">
        Cart
      </Link>
      <Link style={style2} to="/orders">
        Orders
      </Link>
    </div>
  );
}
